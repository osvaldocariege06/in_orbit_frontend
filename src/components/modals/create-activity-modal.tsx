
import { Calendar, Tag, X } from 'lucide-react'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export default function CreateActivityModal({ closeCreateActivityModal, }: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="w-[620px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h2>Cadastrar atividade</h2>
              <button 
                type="button" 
                onClick={closeCreateActivityModal}
                className="active:scale-90 transition-all"
                >
                <X className="size-5 text-zinc-400"/>
              </button>
            </div>
            <p className="text-base text-zinc-400 mt-2">
              Todos convidados podem visualizar as atividades.
            </p>
          </div>

          <form className="space-y-3">
            <div className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <label htmlFor="title">
                <Tag className='size-5 text-zinc-400'/>
              </label>
              <input 
                type="text" 
                id='title'
                name="title" 
                placeholder="Qual a atividade?" 
                className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1 h-14 px-4" 
              />
            </div>

            <div className="bg-zinc-950 h-14 py-2.5 px-4 rounded-lg flex items-center justify-between gap-2.5">
              <label htmlFor="occours_at">
              <Calendar className='size-5 text-zinc-400' />
              </label>
              <input 
                type="datetime-local" 
                id='occours_at'
                name="occours_at"
                placeholder="Data e hora da atividade" 
                className="bg-transparent placeholder-zinc-600 text-lg outline-none flex-1 h-14 px-4 " 
              />
            </div>

            <button 
              className="bg-lime-300 w-full hover:bg-lime-400 transition-all active:scale-95 h-11 px-5 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2"
            >
              Salvar atividade
            </button>
          </form>
      </div>
    </div>
  )
}
