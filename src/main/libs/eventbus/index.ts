import { ipcMain } from 'electron'
import { IPCEvents } from '../../../models/EventBus/type'
import { Store } from '..'

type IPCEventsMap = { [E in IPCEvents as E['type']]: E }

export class EventBus<T extends IPCEvents = IPCEvents> {
  public mount() {
    this.subscribe('WINDOW_CLOSE', () => {
      Store.Window.close()
    })

    this.subscribe('WINDOW_MINIMUM', () => {
      Store.Window.minimize()
    })
  }

  public subscribe<K extends T['type'], P extends IPCEventsMap[K]['payload']>(
    type: K,
    callback: (event: Electron.IpcMainEvent, payload: P) => void
  ) {
    ipcMain.on(type, (event, payload) => {
      callback(event, payload)
    })
  }

  public send<K extends T['type'], P extends IPCEventsMap[K]['payload']>(type: K, payload: P) {
    Store.Window.WebContents?.send(type as unknown as string, payload)
  }
}
