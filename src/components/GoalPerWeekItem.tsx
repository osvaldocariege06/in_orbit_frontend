import { Circle, CircleCheck } from 'lucide-react'

type GoalPerWeekItemProps = {
  desiredWeeklyFrequency: number
  handleDesiredWeeklyFrequency: (id: number) => void
  props: {
    id: number
    count: string
    icon: string
  }
}

export default function GoalPerWeekItem({
  desiredWeeklyFrequency,
  handleDesiredWeeklyFrequency,
  props,
}: GoalPerWeekItemProps) {
  return (
    <button
      type="button"
      onClick={() => handleDesiredWeeklyFrequency(props.id)}
      className={`w-full h-9 rounded-lg border flex justify-between items-center px-4 active:scale-[.98] transition-all ease-in-out duration-100 ${props.id === desiredWeeklyFrequency ? 'border-pink-500 bg-pink-950/30' : 'border-zinc-900 bg-black'}`}
    >
      {props.id === desiredWeeklyFrequency ? (
        <CircleCheck className="size-4 text-pink-400" />
      ) : (
        <Circle className="size-4 text-zinc-600" />
      )}
      <span className="text-sm text-center">{props.id}x na semana</span>
      {props.icon}
    </button>
  )
}
