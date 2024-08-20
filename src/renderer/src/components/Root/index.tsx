import Sidebar from '../Sidebar'
import { Outlet, useLocation } from 'react-router'
import '../../assets/app.css'
import HomePage from '../../pages/HomePage'
import { TitleBar } from '../TitleBar'

const Root = () => {
  const location = useLocation()

  return (
    <>
      <TitleBar />
      <Sidebar />
      <div id="app">
        <div id="contents">{location.pathname === '/' ? <HomePage /> : <Outlet />}</div>
      </div>
    </>
  )
}

export default Root
