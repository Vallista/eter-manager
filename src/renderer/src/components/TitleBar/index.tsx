import classNames from 'classnames'
import classes from './index.module.css'
import { sendIpcEvent } from '../../utils'
import { Link } from 'react-router-dom'
import { Label } from '../Label'
import { version } from '../../../../../package.json'

export const TitleBar = () => {
  const handleClose = () => {
    sendIpcEvent('WINDOW_CLOSE')
  }

  const handleMinimize = () => {
    sendIpcEvent('WINDOW_MINIMUM')
  }

  return (
    <header className={classes['titlebar']}>
      <div className={classes['title-container']}>
        <Link to="/">ETERMANAGER</Link>
        <Label color="red">v{version}</Label>
      </div>
      <div className={classes['drag-region']}>
        <div className={classes['window-title']}></div>
        <div className={classes['window-controls']}>
          <button
            className={classNames(
              classes['window-controls-button'],
              classes['window-controls-button-hover'],
              classes['window-controls-restore'],
              classes['window-controls-disable']
            )}
          ></button>
          <button
            className={classNames(
              classes['window-controls-button'],
              classes['window-controls-button-hover'],
              classes['window-controls-min']
            )}
            onClick={handleMinimize}
          />
          <button
            className={classNames(
              classes['window-controls-button'],
              classes['window-controls-button-hover'],
              classes['window-controls-close']
            )}
            onClick={handleClose}
          />
        </div>
      </div>
    </header>
  )
}
