import Sidebar from '../Sidebar'
import { Outlet, useLocation } from 'react-router'
import '../../assets/app.css'
import TestPage from '@renderer/pages/Test'
import { TitleBar } from '../TitleBar'

const Root = () => {
  const location = useLocation()

  return (
    <>
      <TitleBar />
      <Sidebar menus={[]} />
      <div id="app">
        <div id="contents">{location.pathname === '/' ? <TestPage /> : <Outlet />}</div>
      </div>
    </>
  )
}

export default Root
