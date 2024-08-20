import { app } from 'electron'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { Store } from './libs'
import { APPLICATION_NAME } from './libs/window'
import { BossReminder } from './BossReminder'

const bossReminder = new BossReminder()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  //#region electron app initialize
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  if (process.platform === 'win32') {
    app.setAppUserModelId(APPLICATION_NAME)
  }
  //#endregion

  // MEMO: Electron app이 생성된 후 초기화 동작
  Store.mount()
  bossReminder.mount()

  //#region 시작 시 윈도우 열기
  Store.Window.createWindow()

  // app.on('activate', function () {
  //   // On macOS it's common to re-create a window in the app when the
  //   // dock icon is clicked and there are no other windows open.
  //   if (BrowserWindow.getAllWindows().length === 0) Store.Window.createWindow()
  // })
  //#endregion
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
  //   app.quit()
  // }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
