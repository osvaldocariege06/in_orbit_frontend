import GoalPerWeekItem from './GoalPerWeekItem'
import Button from './Button'
import { GoalsPerWeek } from '../utils/goal-per-week-array'
import { type FormEvent, useState } from 'react'
import { createGoal } from '../http/create-goal'
import { useQueryClient } from '@tanstack/react-query'

interface CreateGoalProps {
  closeModal: () => void
}

export function CreateGoalModal({ closeModal }: CreateGoalProps) {
  const queryClient = useQueryClient()

  const [title, setTitle] = useState('')
  const [desiredWeeklyFrequency, setDesiredWeeklyFrequency] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  function handleDesiredWeeklyFrequency(id: number) {
    const itemId = GoalsPerWeek.filter(item => item.id === id)
      .map(item => item.id)
      .toString()
    setDesiredWeeklyFrequency(Number(itemId))
  }

  function reset() {
    setTitle('')
    setDesiredWeeklyFrequency(1)
    setIsLoading(false)
    setIsError(false)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    if (!title) {
      setIsError(true)
      return 
    }
    setIsError(false)
    setIsLoading(true)

    await createGoal({
      title,
      desiredWeeklyFrequency
    })


    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    
    reset()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="h-screen w-full flex flex-col bg-zinc-950 border-l border-zinc-800 justify-between md:w-[400px] relative z-50 p-8 shadow-md transition-transform duration-100 ease-in-out"
    >
      <div className="flex flex-col w-full space-y-6">
        <header className="w-full flex items-center">
          <h2 className="text-lg text-zinc-50 font-semibold">Cadastrar meta</h2>
        </header>

        <p className="tracking-wide leading-relaxed text-zinc-50 text-sm">
          Adicione atividades que te fazem bem e que você quer continuar
          praticando toda semana.
        </p>

        <div className="flex flex-col">
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="title"
              className="font-semibold text-zinc-50 text-base"
            >
              Qual a atividade?
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Praticar exercícios, meditar, etc..."
              className="placeholder-zinc-600 outline-none shadow-md border border-zinc-800 rounded-lg h-12 text-sm px-4 bg-black"
            />
          </div>
          {isError && (
            <span className="text-sm text-red-400 mt-2">Informe a atividade que deseja realizar</span>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <span className="font-semibold text-zinc-50 text-base">
            Quantas vezes na semana?
          </span>
          {GoalsPerWeek.map(item => (
            <GoalPerWeekItem
              key={item.id}
              desiredWeeklyFrequency={desiredWeeklyFrequency}
              handleDesiredWeeklyFrequency={handleDesiredWeeklyFrequency}
              props={item}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex gap-4">
        <Button variant="secondary" onClick={closeModal}>
          Fechar
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Salvar
        </Button>
      </div>
    </form>
  )
}
