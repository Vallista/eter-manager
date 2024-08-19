import os from 'os'
import storage from 'electron-json-storage'

export class Storage<IStorage extends Record<string, object>> {
  constructor() {
    storage.setDataPath(os.tmpdir())
  }

  public set<T extends IStorage = IStorage, K extends keyof T = keyof T>(
    key: K,
    value: T[K]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      storage.set(key as any, value, (error) => {
        if (error) throw reject(error)
        resolve(void 0)
      })
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
}
