import { CheckCircle2, Plus } from 'lucide-react'
import logo from '../../assets/svgs/logo.svg'
import { Progress, ProgressIndicator } from '../../components/ui/progress-bar'
import { Separator } from '../../components/ui/separator'
import { OutlineButton } from '../../components/ui/outline-button'
import { Button } from '../../components/ui/button'
import { useState } from 'react'
import { CreateGoalModal } from '../../components/CreateGoal'

function Summary() {
  const [show, setShow] = useState(false)

  function handleOpenCreateGoal() {
    setShow(true)
  }

  function handleCloseCreateGoal() {
    setShow(false)
  }

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
              05 a 12 de Agosto
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
            <ProgressIndicator style={{ width: '50%' }} />
          </Progress>

          <div className="w-full flex justify-between items-center">
            <span className="text-sm text-zinc-400">
              Você completou{' '}
              <span className="font-medium text-zinc-100">8</span> de{' '}
              <span className="font-medium text-zinc-100">15</span> metas nessa
              semana.
            </span>
            <span className="text-zinc-400 font-medium text-sm">58%</span>
          </div>
        </div>

        <Separator />

        <div className="flex gap-3 flex-wrap">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Meditar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Praticar exercício
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Acordar cedo
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Domingo{' '}
              <span className="text-zinc-400 text-xs">(10 de Setembro)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-400" />
                <span className="text-sm text-zinc-400">
                  Você completou “
                  <span className="text-zinc-100">Acordar cedo</span>” às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
                <button
                  type="button"
                  className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                >
                  Desfazer
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-400" />
                <span className="text-sm text-zinc-400">
                  Você completou “
                  <span className="text-zinc-100">Acordar cedo</span>” às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
                <button
                  type="button"
                  className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                >
                  Desfazer
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-400" />
                <span className="text-sm text-zinc-400">
                  Você completou “
                  <span className="text-zinc-100">Acordar cedo</span>” às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
                <button
                  type="button"
                  className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                >
                  Desfazer
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Segunda-feira{' '}
              <span className="text-zinc-400 text-xs">(10 de Setembro)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-400" />
                <span className="text-sm text-zinc-400">
                  Você completou “
                  <span className="text-zinc-100">Acordar cedo</span>” às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
                <button
                  type="button"
                  className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                >
                  Desfazer
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-400" />
                <span className="text-sm text-zinc-400">
                  Você completou “
                  <span className="text-zinc-100">Acordar cedo</span>” às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
                <button
                  type="button"
                  className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                >
                  Desfazer
                </button>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-400" />
                <span className="text-sm text-zinc-400">
                  Você completou “
                  <span className="text-zinc-100">Acordar cedo</span>” às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
                <button
                  type="button"
                  className="text-sm text-zinc-400 hover:text-red-400 active:scale-95 transition-all"
                >
                  Desfazer
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
