const { Notification: ElectronNotification } = require('electron')

// import icon from '../../../../resources/icon.png?asset'

/**
 * Electron의 Notification을 래핑한 객체
 */
export class Notification {
  constructor(icon?: string) {
    this.title = ''
    this.body = ''
    this.subtitle = ''
    this.instance = new ElectronNotification({
      title: this.title,
      body: this.body,
      subtitle: this.subtitle,
      icon
    })
  }

  /**
   * OS에 Notification을 실제로 보여주는 함수
   * @param title 타이틀
   * @param body 설명
   */
  public show(title: string, body: string, options?: { subtitle?: string }) {
    this.instance.title = title
    this.instance.body = body
    if (options?.subtitle) this.instance.subtitle = options?.subtitle

    this.instance.show()
  }

  private instance: Electron.CrossProcessExports.Notification
  private title: string
  private body: string
  private subtitle?: string
}
