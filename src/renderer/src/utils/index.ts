import { IPCEvents } from '../../../models/EventBus/type'

export function sendIpcEvent(type: IPCEvents['type']) {
  window.electron.ipcRenderer.send(type)
}
