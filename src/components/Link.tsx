import { Link2 } from 'lucide-react'

interface LinkProps {
  title: string
  link: string
}

export default function Link({ title, link}: LinkProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-zinc-100 font-semibold text-xl">{title}</span>
        <a href={link} target='_blank' className="text-zinc-400 text-sm">{link}</a>
      </div>  
      <Link2 className="size-5 text-zinc-400"/>
    </div>
  )
}
