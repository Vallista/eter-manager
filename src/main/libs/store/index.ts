import { EventBus } from '../eventbus'
import { NotificationStore } from '../notifications'
import { Scheduler } from '../scheduler'
import { TrayStore } from '../tray'
import { Window } from '../window'

/**
 * Main Process를 쉽게 관리하기 위한 Singleton Store
 */
class Store {
  constructor() {}

  public mount() {
    this.mainWindow = new Window()
    this.eventBus = new EventBus()
    this.eventBus.mount()
    this.scheduler = new Scheduler()
    this.notification = new NotificationStore()
    this.tray = new TrayStore()
  }

  /**
   * Window 객체를 가져옵니다.
   */
  public get Window() {
    return this.mainWindow
  }

  /**
   * Notification 객체를 가져옵니다.
   */
  public get Notification() {
    return this.notification
  }

  /**
   * Tray 객체를 가져옵니다.
   */
  public get Tray() {
    return this.tray
  }

  /**
   * Scheduler 객체를 가져옵니다.
   */
  public get Scheduler() {
    return this.scheduler
  }

  /**
   * EventBus 객체를 가져옵니다.
   */
  public get EventBus() {
    return this.eventBus
  }

  private notification!: NotificationStore
  private tray!: TrayStore
  private mainWindow!: Window
  private scheduler!: Scheduler
  private eventBus!: EventBus
}

export default new Store()
