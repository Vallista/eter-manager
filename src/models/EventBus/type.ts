export type IPCEvents = IPCEventWindowClose | IPCEventWindowMinimum | IPCEventSave

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
