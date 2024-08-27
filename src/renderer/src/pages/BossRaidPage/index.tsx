import { BossRaidSettings } from './components/BossRaidSettings'
import { BossRaidCardList } from './components/BossRaidCardList'
import Contents from '../../components/Contents'

const BossRaidPage = () => {
  return (
    <Contents title="보스레이드 정보">
      <BossRaidSettings />
      <BossRaidCardList />
    </Contents>
  )
}

export default BossRaidPage
