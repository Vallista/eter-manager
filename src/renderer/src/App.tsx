import { RouterProvider } from 'react-router-dom'
import routes from './configs/routes'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return <RouterProvider router={routes} />
}

export default App
