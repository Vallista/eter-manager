const { Notification } = require('electron')

export function createNotification(title: string, body: string) {
  return new Notification({
    title,
    body
  })
}
