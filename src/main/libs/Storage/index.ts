import * as fs from 'fs'
import * as path from 'path'

const FILENAME = 'store.json'

export class Storage<S extends Record<string, any> = Record<string, unknown>> {
  constructor(schema: S) {
    const userDataPath = path.resolve('.')
    this.filePath = path.join(userDataPath, FILENAME)

    try {
      const file = fs.readFileSync(this.filePath, 'utf-8')
      this.store = JSON.parse(file)
    } catch (error) {
      this.store = schema
    }
  }

  public get<T extends S = S, K extends keyof T = keyof T>(key: K): T[K] {
    return this.store[key as string]
  }

  public set<T extends S = S, K extends keyof T = keyof T>(key: K, value: T[K]): void {
    this.store[key as string] = value
    this.save()
  }

  public delete<T extends S = S, K extends keyof T = keyof T>(key: K): void {
    return this.store.delete(key)
  }

  private save(): void {
    fs.writeFileSync(this.filePath, JSON.stringify(this.store))
  }

  private store: Record<string, any>
  private filePath: string
}
