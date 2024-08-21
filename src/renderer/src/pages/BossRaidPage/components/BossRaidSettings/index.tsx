import { FC, ReactNode, useState } from 'react'
import { Toggle } from '../../../../components/Toggle'
import styles from './index.module.css'

interface Props {}

export const BossRaidSettings: FC<Props> = () => {
  return (
    <div className={styles['container']}>
      <h2>보스레이드 알람 설정</h2>
      <div className={styles['alarm-wrapper']}>
        <ToggleWithDescription>5분 전부터 1분마다 알람 받기</ToggleWithDescription>
        <ToggleWithDescription>10분 전에 알람 받기</ToggleWithDescription>
        <ToggleWithDescription>20분 전에 알람 받기</ToggleWithDescription>
        <ToggleWithDescription>30분 전에 알람 받기</ToggleWithDescription>
        <ToggleWithDescription>60분 전에 알람 받기</ToggleWithDescription>
      </div>
    </div>
  )
}

const ToggleWithDescription: FC<{ children: ReactNode }> = (props) => {
  const { children } = props
  const [toggle, setToggle] = useState(true)

  return (
    <div className={styles['toggle-container']}>
      <Toggle value={toggle} setValue={setToggle} small />
      <span className={styles['toggle-text']}>{children}</span>
    </div>
  )
}
