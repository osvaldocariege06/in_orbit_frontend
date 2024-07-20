import { Calendar, MapPin, Plus, Settings2, UserCog } from "lucide-react";
import { Dispatch, useState } from "react";
import Link from "../../components/Link";
import Invite from "../../components/Invite";
import CreateActivityModal from "../../components/modals/create-activity-modal";
import Activities from "../../components/Activities";
import CreateLinkModal from "../../components/modals/create-link-modal";

interface TripDetailsProps {
  setChangePages: Dispatch<React.SetStateAction<"Create-trip" | "Details-trip">>
}

export default function TripDetails({ setChangePages }: TripDetailsProps) {

  const [isCreateActivityModal, setIsCreateActivityModal] = useState(false)
  const [isCreateLinkModal, setIsCreateLinkModal] = useState(false)

  function openCreateActivityModal(){
    setIsCreateActivityModal(true)
  }

  function closeCreateActivityModal(){
    setIsCreateActivityModal(false)
  }

  function openCreateLinkModal(){
    setIsCreateLinkModal(true)
  }

  function closeCreateLinkModal(){
    setIsCreateLinkModal(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl shadow-shape bg-zinc-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400"/>
          <span className="text-lg text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400"/>
            <span className="text-lg text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <div className="w-px h-4 bg-zinc-600"/>

          <button 
            onClick={() => setChangePages('Create-trip')}
            className="bg-zinc-800 hover:bg-zinc-600 transition-all active:scale-95 px-5 py-2 rounded-xl text-zinc-200 font-medium text-base flex justify-center items-center gap-2"
          >
            Alterar local/data 
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-6">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-50 text-3xl font-semibold">Atividades</h2>

            <button 
             onClick={openCreateActivityModal}
             className="bg-lime-300 hover:bg-lime-400 transition-all active:scale-95 px-5 py-2 rounded-xl text-lime-950 font-medium text-base flex justify-center items-center gap-2"
            >
              <Plus className="size-5"/>
              Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6 hidden">
          <div className="space-y-6">
            <h2 className="text-zinc-50 text-3xl font-semibold">Links importantes</h2>
            
            <div className="flex flex-col gap-5">
              <Link 
                title="Reserva do AirBnB"
                link="https://www.airbnb.com.br/rooms/104700011"
              />

              <Link 
                title="Regras da casa"
                link="https://www.notion.com/pages/1047000112"
              />

              <button 
                onClick={openCreateLinkModal}
                className="bg-zinc-800 hover:bg-zinc-700 transition-all active:scale-95 px-5 py-2 rounded-xl text-zinc-50 font-medium text-base flex justify-center items-center gap-2"
              >
                <Plus className="size-5"/>
                Cadastrar novo link
              </button>
            </div>

            <div className=" h-px bg-zinc-800"/>

            <div className="space-y-6">
            <h2 className="text-zinc-50 text-3xl font-semibold">Convidados</h2>
            
            <div className="flex flex-col gap-5">
              <Invite 
                title="Jessica White"
                email="jessica.white44@yahoo.com"
              />

              <Invite 
                title="Dr. Rita Pacocha"
                email="lacy.stiedemann@gmail.com"
              />

              <Invite 
                title="Wilfred Dickens III"
                email="marian.hyatt@hotmail.com"
              />

              <button 
                className="bg-zinc-800 hover:bg-zinc-700 transition-all active:scale-95 px-5 py-2 rounded-xl text-zinc-50 font-medium text-base flex justify-center items-center gap-2"
              >
                <UserCog className="size-5"/>
                Gerenciar convidados
              </button>
            </div>
            </div>
          </div>
        </div>
      </main>

      {isCreateActivityModal && <CreateActivityModal closeCreateActivityModal={closeCreateActivityModal} /> }
      {isCreateLinkModal && <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} /> }
    </div>
  )
}
