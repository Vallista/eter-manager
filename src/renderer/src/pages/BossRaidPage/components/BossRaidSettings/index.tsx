import { FC, ReactNode, useEffect, useReducer, useState } from 'react'
import { Toggle } from '../../../../components/Toggle'
import styles from './index.module.css'

interface Props {}

interface BossRaidSettingState {
  min5: boolean
  min10: boolean
  min20: boolean
  min30: boolean
  min60: boolean
}

type BossRaidSettingActions =
  | {
      type: 'MIN_5'
      payload: boolean
    }
  | {
      type: 'MIN_10'
      payload: boolean
    }
  | {
      type: 'MIN_20'
      payload: boolean
    }
  | {
      type: 'MIN_30'
      payload: boolean
    }
  | {
      type: 'MIN_60'
      payload: boolean
    }
  | {
      type: 'ALL'
      payload: BossRaidSettingState
    }

const reducer: (
  state: BossRaidSettingState,
  action: BossRaidSettingActions
) => BossRaidSettingState = (state, action) => {
  switch (action.type) {
    case 'MIN_5':
      return {
        ...state,
        min5: action.payload
      }
    case 'MIN_10':
      return {
        ...state,
        min10: action.payload
      }
    case 'MIN_20':
      return {
        ...state,
        min20: action.payload
      }
    case 'MIN_30':
      return {
        ...state,
        min30: action.payload
      }
    case 'MIN_60':
      return {
        ...state,
        min60: action.payload
      }
    case 'ALL':
      return {
        ...action.payload
      }
  }
}

export const BossRaidSettings: FC<Props> = () => {
  const [state, dispatch] = useReducer(reducer, {
    min5: true,
    min10: true,
    min20: true,
    min30: true,
    min60: true
  })

  const [init, setInit] = useState(false)

  useEffect(() => {
    window.electron.ipcRenderer.send('GET_BOSS_RAID_ALARMS')
    window.electron.ipcRenderer.on('GET_BOSS_RAID_ALARMS', (_, payload) => {
      if (payload) {
        dispatch({
          type: 'ALL',
          payload
        })

        setInit(true)
      }
    })
  }, [])

  useEffect(() => {
    if (!init) return

    window.electron.ipcRenderer.send('SAVE_BOSS_RAID_ALARMS', state)
  }, [state, init])

  return (
    <div className={styles['container']}>
      <h2>보스레이드 알람 설정</h2>
      <div className={styles['alarm-wrapper']}>
        <ToggleWithDescription
          value={state.min5}
          onToggle={(value) =>
            dispatch({
              type: 'MIN_5',
              payload: value
            })
          }
        >
          5분 전부터 1분마다 알람 받기
        </ToggleWithDescription>
        <ToggleWithDescription
          value={state.min10}
          onToggle={(value) =>
            dispatch({
              type: 'MIN_10',
              payload: value
            })
          }
        >
          10분 전에 알람 받기
        </ToggleWithDescription>
        <ToggleWithDescription
          value={state.min20}
          onToggle={(value) =>
            dispatch({
              type: 'MIN_20',
              payload: value
            })
          }
        >
          20분 전에 알람 받기
        </ToggleWithDescription>
        <ToggleWithDescription
          value={state.min30}
          onToggle={(value) =>
            dispatch({
              type: 'MIN_30',
              payload: value
            })
          }
        >
          30분 전에 알람 받기
        </ToggleWithDescription>
        <ToggleWithDescription
          value={state.min60}
          onToggle={(value) =>
            dispatch({
              type: 'MIN_60',
              payload: value
            })
          }
        >
          60분 전에 알람 받기
        </ToggleWithDescription>
      </div>
    </div>
  )
}

const ToggleWithDescription: FC<{
  value: boolean
  onToggle: (value: boolean) => void
  children: ReactNode
}> = (props) => {
  const { value, onToggle, children } = props

  return (
    <div className={styles['toggle-container']}>
      <Toggle value={value} setValue={onToggle} small />
      <span className={styles['toggle-text']}>{children}</span>
    </div>
  )
}
