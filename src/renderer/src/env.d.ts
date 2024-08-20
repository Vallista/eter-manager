/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

import type { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
  }
}
