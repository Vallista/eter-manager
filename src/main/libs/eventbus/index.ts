import { ipcMain } from 'electron'
import { IPCEvents } from '../../../models/EventBus/type'
import { Store } from '..'

export class EventBus {
  public mount() {
    this.subscribe('WINDOW_CLOSE', () => {
      Store.Window.close()
    })

    this.subscribe('WINDOW_MINIMUM', () => {
      Store.Window.minimize()
    })
  }

  public subscribe<T extends IPCEvents>(
    type: T['type'],
    callback: (event: Electron.IpcMainEvent, payload: T['payload']) => void
  ) {
    ipcMain.on(type, (event, payload) => {
      callback(event, payload)
    })
  }

  public send<T extends IPCEvents>(type: T['type'], payload: T['payload']) {
    Store.Window.WebContents?.send(type, payload)
  }
}
