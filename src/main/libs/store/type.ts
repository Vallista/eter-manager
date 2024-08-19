export interface BaseStorage extends Record<string, object> {
  settings: {
    alarms: number[]
  }
}
