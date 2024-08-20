import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import styles from './index.module.css'

interface Props {
  color?: 'white' | 'red' | 'mint' | 'yellow' | 'blue' | 'purple' | 'gray'
  children: ReactNode
}

export const Label: FC<Props> = (props) => {
  const { color = 'white', children } = props

  return (
    <div className={classNames([styles.label, styles[`background-color-${color}`]])}>
      {children}
    </div>
  )
}
