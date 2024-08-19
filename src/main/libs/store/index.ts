import { EventBus } from '../eventbus'
import { NotificationStore } from '../notifications'
import { Scheduler } from '../scheduler'
import { Storage } from '../Storage'
import { TrayStore } from '../tray'
import { Window } from '../window'
import { BaseStorage } from './type'

/**
 * Main Process를 쉽게 관리하기 위한 Singleton Store
 */
class Store<T extends Record<string, object>> {
  constructor() {
    this.mainWindow = new Window()
    this.eventBus.mount()
  }

  /**
   * #WARNING: constructor로 실행할 경우 자바스크립트 실행이 electron app 생성보다 빠르기 때문에 문제가 일어날 수 있음
   */
  public createNotification() {
    if (this.notification) return
    this.notification = new NotificationStore()
  }

  /**
   * Tray 생성
   */
  public createTray() {
    if (this.tray) return
    this.tray = new TrayStore()
  }

  /**
   * Scheduler 생성
   */
  public createScheduler() {
    if (this.scheduler) return
    this.scheduler = new Scheduler()
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
   * Storage 객체를 가져옵니다.
   */
  public get Storage() {
    return this.storage
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
  private storage: Storage<T> = new Storage()
  private eventBus: EventBus = new EventBus()
}

export default new Store<BaseStorage>()
