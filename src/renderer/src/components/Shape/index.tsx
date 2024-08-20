import { FC, ReactNode } from 'react'
import styles from './index.module.css'

interface Props {
  children: ReactNode
  onClick?: () => void
}

export const Shape: FC<Props> = (props) => {
  const { children, onClick } = props

  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  )
}
