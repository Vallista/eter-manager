import { BrowserWindow, shell } from 'electron'
import icon from '../../../../resources/icon.png?asset'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'

export const WINDOW_WIDTH = 1280
export const WINDOW_HEIGHT = 800
export const APPLICATION_NAME = '이터매니저'

export class Window {
  public createWindow() {
    if (this.instance !== null) {
      this.instance.focus()
      return
    }

    this.instance = new BrowserWindow({
      width: WINDOW_WIDTH,
      height: WINDOW_HEIGHT,
      resizable: false,
      icon,
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false,
        nodeIntegration: true,
        contextIsolation: true
      },
      frame: false,
      maximizable: false
    })

    this.instance.on('ready-to-show', () => {
      this.show()
    })

    this.instance.webContents.setWindowOpenHandler((details) => {
      shell.openExternal(details.url)
      return {
        action: 'deny'
      }
    })

    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      this.instance.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
      this.instance.loadFile(join(__dirname, '../renderer/index.html'))
    }
  }

  public show() {
    this.instance?.show()
  }

  public close() {
    this.instance?.hide()
    this.instance = null
  }

  public minimize() {
    this.instance?.minimize()
  }

  public get WebContents() {
    return this.instance?.webContents
  }

  private instance: BrowserWindow | null = null
}
