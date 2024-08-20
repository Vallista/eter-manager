import Root from '../components/Root'
import { createHashRouter } from 'react-router-dom'
import { sidebar } from './sidebar'

export const routes = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: sidebar.map((it) => ({
      path: it.path,
      element: it.element
    }))
  }
])
