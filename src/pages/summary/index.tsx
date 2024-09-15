import { CheckCircle2, Plus } from 'lucide-react'
import logo from '../../assets/svgs/logo.svg'
import { Progress, ProgressIndicator } from '../../components/ui/progress-bar'
import { Separator } from '../../components/ui/separator'
import { Button } from '../../components/ui/button'
import { useState } from 'react'
import { CreateGoalModal } from '../../components/CreateGoal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-BR'
import PendingGoals from '../../components/pending-goals'

dayjs.locale(ptBR)

function Summary() {
  const [show, setShow] = useState(false)

  function handleOpenCreateGoal() {
    setShow(true)
  }

  function handleCloseCreateGoal() {
    setShow(false)
  }

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  if (!data) return null
  
  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')
  
  const completedPercentege = Math.round(data.completed * 100 / data.total)
  
  return (
    <div className="w-full flex justify-center">
      {show && (
        <div className="absolute w-full h-screen flex justify-end items-end bg-black/50">
          <CreateGoalModal closeModal={handleCloseCreateGoal} />
        </div>
      )}
      <div className="w-full max-w-[490px] space-y-6 mt-11">
        <header className="w-full flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="Logo In Orbit" />
            <span className="font-bold text-lg text-zinc-50">
              {firstDayOfWeek}
              {' - '}
              {lastDayOfWeek}
            </span>
          </div>
          <div className="w-44 flex justify-center items-center">
            <Button onClick={handleOpenCreateGoal}>
              <Plus className="size-4 text-zinc-50" />
              Cadastrar meta
            </Button>
          </div>
        </header>

        <div className="flex flex-col gap-3">
          <Progress value={8} max={15}>
            <ProgressIndicator style={{ width: `${completedPercentege}%` }} />
          </Progress>

          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-zinc-400">
              Você completou{' '}
              <span className="font-medium text-zinc-100">
                {data?.completed}
              </span>{' '}
              de{' '}
              <span className="font-medium text-zinc-100">{data?.total}</span>{' '}
              metas nessa semana.
            </span>
            <span className="text-zinc-400 font-medium text-sm">
              {completedPercentege}%
            </span>
          </div>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {Object.entries(data.goalsPerDay).map(([date, goals]) => {
            const weekDay = dayjs(date).format('dddd')
            const formattedDate = dayjs(date).format('D[ De ]MMMM')
            return (
          <div key={date} className="flex flex-col gap-4">
            <h3 className="font-medium capitalize">
              {weekDay}{' '}
              <span className="text-zinc-400 text-xs capitalize">({formattedDate})</span>
            </h3>

            <ul className="flex flex-col gap-3">
              {goals.map(goal => {
                const goalTime = dayjs(goal.completedAt).format('HH:mm');
                return (
                  <li key={goal.id} className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-pink-400" />
                    <span className="text-sm text-zinc-400">
                      Você completou “
                      <span className="text-zinc-100">{goal.title}</span>” às{' '}
                      <span className="text-zinc-100">{goalTime}</span>
                    </span>
                    <button
                      type="button"
                      className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                    >
                      Desfazer
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Summary
