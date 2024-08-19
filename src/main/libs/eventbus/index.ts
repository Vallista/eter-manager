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

  private subscribe<T extends IPCEvents>(
    type: T['type'],
    callback: (payload: T['payload']) => void
  ) {
    ipcMain.on(type, (_, payload) => {
      callback(payload)
    })
  }
}
