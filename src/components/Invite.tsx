import { CircleDashed } from 'lucide-react'

interface InviteProps {
  title: string
  email: string
}

export default function Invite({ title, email}: InviteProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-zinc-100 font-semibold text-xl">{title}</span>
        <span className="text-zinc-400 text-sm">{email}</span>
      </div>  
      <CircleDashed className="size-5 text-zinc-400"/>
    </div>
  )
}
