import { BossRaid } from '../Core'

export type IPCEvents =
  | IPCEventWindowClose
  | IPCEventWindowMinimum
  | IPCEventGetBossRaids
  | IPCEventGetBossRaidAlarms
  | IPCEventSaveBossRaidAlarms

export interface IPCEventWindowClose {
  type: 'WINDOW_CLOSE'
  payload: {}
}

export interface IPCEventWindowMinimum {
  type: 'WINDOW_MINIMUM'
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

export interface IPCEventSaveBossRaidAlarms {
  type: 'SAVE_BOSS_RAID_ALARMS'
  payload: {
    min5: boolean
    min10: boolean
    min20: boolean
    min30: boolean
    min60: boolean
  }
}

export interface IPCEventGetBossRaidAlarms extends Pick<IPCEventSaveBossRaidAlarms, 'payload'> {
  type: 'GET_BOSS_RAID_ALARMS'
}
