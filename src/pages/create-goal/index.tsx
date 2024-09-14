import logo from '../../assets/svgs/logo-in-orbit.svg'
import letsStartIllustration from '../../assets/svgs/lets-start-illustration.svg'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateGoalModal } from '../../components/CreateGoal'
import Button from '../../components/Button'

function CreateGoals() {
  const [show, setShow] = useState(false)

  function handleOpenCreateGoal() {
    setShow(true)
  }

  function handleCloseCreateGoal() {
    setShow(false)
  }

  return (
    <div className="w-full h-screen flex flex-col space-y-8 justify-center items-center">
      {show && (
        <div className="absolute w-full h-screen flex justify-end items-end bg-black/50">
          <CreateGoalModal closeModal={handleCloseCreateGoal} />
        </div>
      )}

      <img src={logo} alt="Logo In.Orbit" />
      <img src={letsStartIllustration} alt="lets start illustration" />

      <div className="max-w-80 w-full">
        <p className="text-center leading-relaxed tracking-normal">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <Button type="button" onClick={handleOpenCreateGoal}>
          <Button.Icon>
            <Plus className="size-4" />
          </Button.Icon>
          <Button.Text text="Cadastrar meta" />
        </Button>
      </div>
    </div>
  )
}

export default CreateGoals
