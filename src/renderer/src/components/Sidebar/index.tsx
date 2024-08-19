import { FC } from 'react'
import classes from './index.module.css'

interface Menu {
  label: string
  icon: string
  url: string
}

interface Props {
  menus: Menu[]
}

const Sidebar: FC<Props> = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes['sidebar-menus']}>
        <div className={classes['sidebar-menu']}></div>
      </div>
    </div>
  )
}

export default Sidebar
