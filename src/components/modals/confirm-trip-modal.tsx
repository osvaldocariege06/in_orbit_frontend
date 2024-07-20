
import { Dispatch, FormEvent } from 'react'
import { Plus, User, X } from 'lucide-react'
import Button from '../Button'

interface ConfirrmTripProps {
  addNewEmailToInvite(event: FormEvent<HTMLFormElement>): void
  closeConfirmTripModalOpen: () => void
  setChangePages: Dispatch<React.SetStateAction<"Create-trip" | "Details-trip">>
}

export default function ConfirmTrip({ addNewEmailToInvite, closeConfirmTripModalOpen, setChangePages}: ConfirrmTripProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="w-[620px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2>Confirmar criação da viagem</h2>
              <button 
                type="button" 
                onClick={closeConfirmTripModalOpen}
                className="active:scale-90 transition-all"
                >
                <X className="size-5 text-zinc-400"/>
              </button>
            </div>
            <p className="text-base text-zinc-400 mt-2">
            Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
            </p>
          </div>

          <form onSubmit={addNewEmailToInvite} className="space-y-3">
            <div className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <User />
              <input 
                type="text" 
                name="name" 
                placeholder="Seu nome completo" 
                className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1 h-14 px-4" 
              />
            </div>

            <div className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <User />
              <input 
                type="email" 
                name="email"
                placeholder="Seu e-mail pessoal" 
                className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1 h-14 px-4" 
              />
            </div>

            <Button variant='primary' onClick={() => setChangePages('Details-trip')}>
              Confirmar criação da viagem
              <Plus />
            </Button>
          </form>
      </div>
    </div>
  )
}
