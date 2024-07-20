
import { FormEvent } from 'react'
import EmailItem from './../Email-item'
import { AtSign, Plus, X } from 'lucide-react'

interface InviteGuestsModalProps {
  addNewEmailToInvite(event: FormEvent<HTMLFormElement>): void
  emailsToInvite: string[]
  closeGuestsModalOpen: () => void
  removeEmailsFromInvite: (emailToRemove: string) => void
}

export default function InviteGuestsModal({ emailsToInvite, addNewEmailToInvite, closeGuestsModalOpen, removeEmailsFromInvite}: InviteGuestsModalProps) {
  return (
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
  )
}
