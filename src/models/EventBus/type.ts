import { BossRaid } from '../Core'

export type IPCEvents =
  | IPCEventWindowClose
  | IPCEventWindowMinimum
  | IPCEventSave
  | IPCEventGetBossRaids

export interface IPCEventWindowClose {
  type: 'WINDOW_CLOSE'
  payload: {}
}

export interface IPCEventWindowMinimum {
  type: 'WINDOW_MINIMUM'
  payload: {}
}

export interface IPCEventSave {
  type: 'SAVE'
  payload: {}
}

export interface IPCEventGetBossRaids {
  type: 'GET_BOSS_RAIDS'
  payload: {
    diff: number
    time: Date
    origin: BossRaid
  }[]
}
