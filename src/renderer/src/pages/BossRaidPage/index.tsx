import styles from './index.module.css'
import { BossRaidSettings } from './components/BossRaidSettings'
import { BossRaidCardList } from './components/BossRaidCardList'

const BossRaidPage = () => {
  return (
    <div className={styles.container}>
      <BossRaidSettings />
      <BossRaidCardList />
    </div>
  )
}

export default BossRaidPage
