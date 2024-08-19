import { Tray } from './Tray'

export class TrayStore {
  constructor() {
    this.tray = new Tray()
  }

  public isAlive() {
    return !!this.tray
  }

  private tray: Tray
}
