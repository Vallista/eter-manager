import LiberationCalculatorPage from '../pages/LiberationCalculatorPage'
import BossRaidPage from '../pages/BossRaidPage'

export const sidebar = [
  {
    path: 'boss-raids',
    name: 'boss-raids',
    label: '보스레이드 정보',
    element: <BossRaidPage />
  },
  {
    path: 'liberation-calculator',
    name: 'liberation-calculator',
    label: '해방비용 계산기',
    element: <LiberationCalculatorPage />
  }
]
