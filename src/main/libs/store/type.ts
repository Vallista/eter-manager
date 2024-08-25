export interface BaseStorage {
  settings: {
    alarms: AlarmStorage
  }
}

export interface AlarmStorage {
  min5: boolean
  min10: boolean
  min20: boolean
  min30: boolean
  min60: boolean
}
