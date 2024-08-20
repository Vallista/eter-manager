import { Store } from '..'
import icon from '../../../../resources/icon.png'
import { Tray as ElectronTray, Menu as ElectronMenu, nativeImage, app } from 'electron'
import { APPLICATION_NAME } from '../window'

export class Tray {
  constructor() {
    const iconImage = nativeImage.createFromDataURL(icon)
    this.instnace = new ElectronTray(iconImage)

    const contextMenu = ElectronMenu.buildFromTemplate([
      {
        label: '창 열기',
        click: () => {
          Store.Window.createWindow()
        }
      },
      {
        label: '종료',
        click: () => {
          app.quit()
        }
      }
    ])

    this.instnace.setToolTip(APPLICATION_NAME)
    this.instnace.setTitle(APPLICATION_NAME)
    this.instnace.setContextMenu(contextMenu)

    this.instnace.on('double-click', () => {
      Store.Window.createWindow()
    })
  }

  private instnace!: ElectronTray
}
