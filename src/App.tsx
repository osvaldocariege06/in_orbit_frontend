import { MapPinIcon, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from "lucide-react"
import { FormEvent, useState } from "react"
import EmailItem from "./components/Email-item"
function App() {

  const [isGuestsInput, setIsGuestsInput] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
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
        <div className="bg-zinc-900 h-16 rounded-xl flex items-center px-4 shadow-shape gap-4">
          <div className="flex items-center gap-2 flex-1">
            <MapPinIcon className="size-5 text-zinc-400" />
            <input type="text" disabled={isGuestsInput} placeholder="Para onde você vai?" className="bg-transparent placeholder-zinc-600 text-lg outline-none" />
          </div>
          <div className="flex items-center gap-2 w-52">
            <Calendar className="size-5 text-zinc-400" />
            <input type="text" disabled={isGuestsInput} placeholder="Quando?" className="bg-transparent placeholder-zinc-600 text-lg outline-none w-52" />
          </div>
          <div className="w-px h-6 bg-zinc-800"/>
          {isGuestsInput ? (
            <button 
              onClick={closeGuestsInput} 
              className="bg-zinc-800 hover:bg-zinc-600 transition-all active:scale-95 px-5 py-2 rounded-xl text-zinc-200 font-medium text-base flex justify-center items-center gap-2"
            >
              Alterar local/data 
              <Settings2 className="size-5" />
            </button>) : (
            <button 
              onClick={openGuestsInput} 
              className="bg-lime-300 hover:bg-lime-400 transition-all active:scale-95 px-5 py-2 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2"
            >
              Continuar
              <ArrowRight className="size-5"/>
          </button>
          )}
        </div>

        {isGuestsInput && (
          <div className="bg-zinc-900 h-16 rounded-xl flex items-center px-4 shadow-shape gap-4">
          <button onClick={openGuestsModalOpen} className="flex items-center gap-2 flex-1">
            <UserRoundPlus className="size-5 text-zinc-400" />
            <span className="text-zinc-600 text-lg">Quem estará na viagem?</span>
          </button>
          <div className="w-px h-6 bg-zinc-800"/>
          <button onClick={openGuestsInput} className="bg-lime-300 hover:bg-lime-400 transition-all active:scale-95 px-5 py-2 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2">
            Confirmar viagem
            <ArrowRight />
          </button>
        </div>
        )}
        
        </div>
        <p className="text-zinc-500 text-center">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300">termos de uso</a> e 
          <a href="#" className="text-zinc-300">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
          <div className="w-[640px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2>Selecionar convidados</h2>
                <button 
                  type="button" 
                  onClick={closeGuestsModalOpen}
                  className="active:scale-90 transition-all"
                  >
                  <X className="size-5 text-zinc-400"/>
                </button>
              </div>
              <p className="text-sm text-zinc-400 mt-2">
                Os convidados irão receber e-mails para confirmar a participação na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite && ''}
             {emailsToInvite.length !== 0 ? 
             <>
              {emailsToInvite.map((email, index) => (
                <EmailItem key={index} email={email} remove={removeEmailsFromInvite} />

              ))}
             </> : 
              <div className="flex justify-center items-center w-full my-4">
                <span className="text-2xl text-zinc-600 text-center">Sem nenhum convidado!</span>
              </div>
              }
            </div>

            <div className="bg-zinc-800 w-full h-px"/>

            <form onSubmit={addNewEmailToInvite} className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 px-2">
                <AtSign />
                <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1" />
              </div>

              <button 
                type="submit"
                className="bg-lime-300 hover:bg-lime-400 transition-all active:scale-95 px-5 py-2 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2"
              >
                Convidar
                <Plus />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
