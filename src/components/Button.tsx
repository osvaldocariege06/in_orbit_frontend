import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  variant: 'primary' | 'secondary'
}

export default function Button({ children, variant, ...props }: ButtonProps) {

  

  return (
    <button 
      {...props}
      className={`transition-all active:scale-95 w-full px-5 py-2 rounded-xl font-medium text-base flex justify-center items-center gap-2 ${variant === 'primary' ? 'bg-lime-300 hover:bg-lime-400 text-lime-950' : 'bg-zinc-800 hover:bg-zinc-700'}`}
    >
      {children}
    </button>
  )
}
