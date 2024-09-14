import { Loader } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

export type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  isLoading?: boolean
  variant?: 'primary' | 'secondary'
}

type IcosProps = {
  children: ReactNode
}

type TextProps = {
  text: string
}

export default function Button({
  children,
  isLoading = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={isLoading}
      className={`
      flex w-full gap-2 items-center justify-center mx-auto py-[10px] px-4 rounded-lg active:scale-95 transition-all tracking-tight
      ${variant === 'primary' && 'bg-violet-500 text-white hover:bg-violet-800 '}
      ${variant === 'secondary' && 'bg-zinc-900 text-white hover:bg-zinc-800 '}
      ${isLoading && 'cursor-not-allowed opacity-35'}
      `}
      {...rest}
    >
      {isLoading ? <Loader className="size-4" /> : <>{children}</>}
    </button>
  )
}

export function Icon({ children }: IcosProps) {
  return children
}

export function Text({ text }: TextProps) {
  return <span>{text}</span>
}

Button.Icon = Icon
Button.Text = Text
