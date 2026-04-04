// src/components/Button/Button.tsx
import * as Slot from '@radix-ui/react-slot'
import styles from './Button.module.scss'
import { cn } from '../../utils/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  asChild?: boolean
}

export function Button({ children, variant = 'primary', asChild }: ButtonProps) {
  const Comp = asChild ? Slot.Slot : 'button'
  
  return (
    <Comp className={cn(styles.button, styles[variant])}>
      {children}
    </Comp>
  )
}
