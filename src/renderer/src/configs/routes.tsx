import Root from '@renderer/components/Root'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // {
      //   path: 'dashboard',
      //   index: true,
      //   element: <TestPage />
      // }
    ]
  }
])

export default routes
