import { X } from 'lucide-react'

interface Email {
  email: string
  remove: (emailToRemove: string) => void
}

export default function EmailItem({ email, remove }: Email) {
  return (
    <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
      <span className="text-zinc-300">{email}</span>
      <button onClick={() => remove(email)}>
        <X className="size-4 text-zinc-300"/>
      </button>
    </div>
  )
}
