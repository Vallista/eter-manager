import classNames from 'classnames'
import styles from './index.module.css'
import { Shape } from '../../components/Shape'
import calcender from '../../assets/calender.svg'
import { useNavigate } from 'react-router'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className={classNames([styles.container])}>
      {/* <header>
        <h2>ETERNALCITY MANAGER</h2>
        <h2>이터널시티 매니저</h2>
      </header> */}
      <div>
        <Shape onClick={() => navigate('/boss-raids')}>
          <div className={classNames([styles['inner-shape']])}>
            <img src={calcender} width={64} height={64} />
            <span>보스레이드</span>
          </div>
        </Shape>
      </div>
    </div>
  )
}

export default HomePage
