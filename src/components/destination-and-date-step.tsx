import { ArrowRight, Calendar, MapPinIcon, Settings2 } from 'lucide-react'

interface DestinationDndDateStepProps {
  isGuestsInput: boolean
  openGuestsInput: () => void
  closeGuestsInput: () => void
}

export default function DestinationDndDateStep({ isGuestsInput, openGuestsInput, closeGuestsInput }: DestinationDndDateStepProps) {
  return (
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
  )
}
