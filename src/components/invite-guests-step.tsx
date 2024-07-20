import { ArrowRight, UserRoundPlus } from 'lucide-react'

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  openGuestsModalOpen: () => void
  openConfirmTripModalOpen: () => void
}

export default function InviteGuestsStep({ emailsToInvite, openGuestsModalOpen, openConfirmTripModalOpen}: InviteGuestsStepProps) {
  return (
    <div className="bg-zinc-900 h-16 rounded-xl flex items-center px-4 shadow-shape gap-4">
          <button onClick={openGuestsModalOpen} className="flex items-center gap-2 flex-1">
            <UserRoundPlus className="size-5 text-zinc-400" />
            {emailsToInvite.length > 0 ? (
              <span className="text-zinc-100 text-lg">{emailsToInvite.length} pessoa(s) convidada(s)</span>
            ) : (
              <span className="text-zinc-600 text-lg">Quem estará na viagem?</span>
            )}
          </button>
          <div className="w-px h-6 bg-zinc-800"/>
          <button 
            onClick={openConfirmTripModalOpen} 
            className="bg-lime-300 hover:bg-lime-400 transition-all active:scale-95 px-5 py-2 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2"
          >
            Confirmar viagem
            <ArrowRight />
          </button>
        </div>
  )
}
