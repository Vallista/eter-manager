import { FC, ReactNode } from 'react'
import styles from './index.module.css'

interface Props {
  title: string
  children: ReactNode
}

const Contents: FC<Props> = (props) => {
  const { title, children } = props

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}

export default Contents
