import logo from '../../assets/svgs/logo-in-orbit.svg'
import letsStartIllustration from '../../assets/svgs/lets-start-illustration.svg'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateGoalModal } from '../../components/CreateGoal'
import { Button } from '../../components/ui/button'

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

      <div className="max-w-80 w-full flex flex-col justify-center items-center">
        <p className="text-center leading-relaxed tracking-normal mb-4">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>
        <Button onClick={handleOpenCreateGoal}>
          <Plus className="size-4" />
          Cadastrar metaaa
        </Button>
      </div>
    </div>
  )
}

export default CreateGoals
