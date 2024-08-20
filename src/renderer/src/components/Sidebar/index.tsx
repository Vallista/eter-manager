import { FC } from 'react'
import classes from './index.module.css'
import { sidebar } from '../../configs/sidebar'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

interface Props {}

const Sidebar: FC<Props> = () => {
  const location = useLocation()
  const nowPath = location.pathname.slice(1)

  return (
    <div className={classes.sidebar}>
      <h5 className={classes['sidebar-title']}>CATEGORIES</h5>
      <ul className={classes['sidebar-menus']}>
        {sidebar.map((it) => (
          <li
            className={classNames(
              classes['sidebar-menu'],
              nowPath === it.path ? classes['sidebar-menu-active'] : undefined
            )}
          >
            <Link to={it.path}>{it.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
