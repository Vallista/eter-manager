import Store from 'electron-store'

export class Storage<IStorage extends Record<string, any>> {
  constructor() {
    this.store = new Store()
  }

  public set<T extends IStorage = IStorage, K extends keyof T = keyof T>(
    key: K,
    value: T[K]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.store
    })
  }

  public get<T extends IStorage = IStorage, K extends keyof T = keyof T>(key: K): Promise<T[K]> {
    return new Promise((resolve, reject) => {
      return storage.get(key as any, (error, data) => {
        if (error) throw reject(error)
        return resolve(data as T[K])
      })
    })
  }

  public delete<T extends IStorage = IStorage, K extends keyof T = keyof T>(key: K): Promise<void> {
    return new Promise((resolve, reject) => {
      storage.remove(key as any, (error) => {
        if (error) throw reject(error)
        resolve(void 0)
      })
    })
  }

  private get Store() {
    return this.store as any as {
      set: (key: string, value: string) => void
    }
  }

  private store: Store
}
