import { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { Outlet, useLocation } from 'react-router'
import '../../assets/app.css'

const Root = () => {
  const location = useLocation()

  useEffect(() => {
    location.pathname = '/dashboard'
  }, [])

  return (
    <div id="app">
      <Sidebar menus={[]} />
      <div id="contents">
        <Outlet />
      </div>
    </div>
  )
}

export default Root
