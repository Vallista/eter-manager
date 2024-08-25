import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './index.module.css'
import classNames from 'classnames'

interface Props {
  value: boolean
  setValue: (value: boolean) => void
  defaultValue?: boolean
  small?: boolean
}

export const Toggle: FC<Props> = (props) => {
  const { value, defaultValue, setValue, small } = props
  const [checked, setChecked] = useState(defaultValue || value)
  const ref = useRef<HTMLInputElement>(null)

  const handleSwitch: MouseEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.checked)
  }

  useEffect(() => {
    if (ref.current) ref.current.checked = defaultValue || value
  }, [])

  useEffect(() => {
    if (value === checked) return
    setChecked(value)

    if (ref.current) ref.current.checked = defaultValue || value
  }, [value, checked])

  return (
    <label className={classNames([styles.container, small && styles.small])}>
      <input ref={ref} className={styles.input} type="checkbox" onClick={handleSwitch} />
      <div className={styles.circle} />
    </label>
  )
}
