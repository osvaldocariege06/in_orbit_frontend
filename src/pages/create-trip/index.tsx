
import { Dispatch, FormEvent, useState } from "react"
import DestinationDndDateStep from "../../components/destination-and-date-step"
import InviteGuestsStep from "../../components/invite-guests-step"
import InviteGuestsModal from "../../components/modals/invite-guests-modal"
import ConfirmTrip from "../../components/modals/confirm-trip-modal"

interface ICreateTrip {
  setChangePages: Dispatch<React.SetStateAction<"Create-trip" | "Details-trip">>
}

function CreateTrip({ setChangePages }: ICreateTrip) {

  const [isGuestsInput, setIsGuestsInput] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'osvaldocariege@gmail.com',
  ])

  function openGuestsInput() {
    setIsGuestsInput(true)
  }

  function closeGuestsInput() {
    setIsGuestsInput(false)
  }

  function openGuestsModalOpen() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModalOpen() {
    setIsGuestsModalOpen(false)
  }

  function openConfirmTripModalOpen() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModalOpen() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email) return
    

    if(emailsToInvite.includes(email)) return

    setEmailsToInvite([
      ...emailsToInvite,
      email
    ])

    event.currentTarget.reset()
        
  }

  function removeEmailsFromInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="flex justify-center items-center w-full h-screen bg-hero-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
        <DestinationDndDateStep
          isGuestsInput={isGuestsInput}
          openGuestsInput={openGuestsInput}
          closeGuestsInput={closeGuestsInput}
        />

        {isGuestsInput && (
          <InviteGuestsStep
            emailsToInvite={emailsToInvite}
            openGuestsModalOpen={openGuestsModalOpen}
            openConfirmTripModalOpen={openConfirmTripModalOpen}
          />
        )}
        
        </div>
        <p className="text-zinc-500 text-center">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300">termos de uso</a> e  {' '}
          <a href="#" className="text-zinc-300">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addNewEmailToInvite={addNewEmailToInvite} 
          closeGuestsModalOpen={closeGuestsModalOpen} 
          emailsToInvite={emailsToInvite} 
          removeEmailsFromInvite={removeEmailsFromInvite}
          />
      )}

      {isConfirmTripModalOpen && 
        <ConfirmTrip
          addNewEmailToInvite={addNewEmailToInvite}
          setChangePages={setChangePages}
          closeConfirmTripModalOpen={closeConfirmTripModalOpen}
          />
      }
    </div>
  )
}

export default CreateTrip
