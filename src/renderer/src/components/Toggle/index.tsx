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
    ref.current?.setAttribute('checked', defaultValue || value ? 'true' : 'false')
  }, [])

  useEffect(() => {
    if (value === checked) return
    setChecked(value)
    ref.current?.setAttribute('checked', defaultValue || value ? 'true' : 'false')
  }, [value, checked])

  return (
    <label className={classNames([styles.container, small && styles.small])}>
      <input ref={ref} className={styles.input} type="checkbox" onClick={handleSwitch} />
      <div className={styles.circle} />
    </label>
  )
}
