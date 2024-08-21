import { useEffect, useState } from 'react'
import { IPCEventGetBossRaids } from '../../../../models/EventBus/type'
import {
  거대나방,
  고급주택가,
  렉스,
  문이터,
  와이즈원,
  울티메이트메거트,
  위토생체병기,
  패러사이트,
  포트리스
} from '../../../../models'

import 와이즈원_이미지 from '../../../../../resources/monsters/bosses/thie_wise_one.png'
import 울티메이트메거트_이미지 from '../../../../../resources/monsters/bosses/ultimate_megert.png'
import 렉스_이미지 from '../../../../../resources/monsters/bosses/rax.png'
import 거대나방_이미지 from '../../../../../resources/monsters/bosses/big_moth.png'
import 위토생체병기_이미지 from '../../../../../resources/monsters/bosses/wito.png'
import 포트리스_이미지 from '../../../../../resources/monsters/bosses/fortress.png'
import 문이터_이미지 from '../../../../../resources/monsters/bosses/moon_eater.png'
import 고급주택가_이미지 from '../../../../../resources/monsters/bosses/unknown.png'
import 패러사이트_이미지 from '../../../../../resources/monsters/bosses/mutated_parasite.png'

const bossImages = {
  [와이즈원.id]: 와이즈원_이미지,
  [울티메이트메거트.id]: 울티메이트메거트_이미지,
  [렉스.id]: 렉스_이미지,
  [거대나방.id]: 거대나방_이미지,
  [위토생체병기.id]: 위토생체병기_이미지,
  [포트리스.id]: 포트리스_이미지,
  [문이터.id]: 문이터_이미지,
  [고급주택가.id]: 고급주택가_이미지,
  [패러사이트.id]: 패러사이트_이미지
}

type IPCBossRaidsType = IPCEventGetBossRaids['payload']
type State = 'LOADING' | 'IDLE'

const INTERVAL_TIME = 1000

export function useBossRaids() {
  const [bossRaids, setBossRaids] = useState<IPCBossRaidsType>([])
  const [state, setState] = useState<State>('LOADING')

  useEffect(() => {
    // MEMO: 1초에
    const intervalSendBossRaids = setInterval(() => {
      setState('LOADING')
      window.electron.ipcRenderer.send('GET_BOSS_RAIDS')
    }, INTERVAL_TIME)

    window.electron.ipcRenderer.on('GET_BOSS_RAIDS', (_, payload) => {
      setBossRaids(payload)
      setState('IDLE')
    })

    return () => {
      clearInterval(intervalSendBossRaids)
    }
  }, [])

  return {
    state: state,
    bossRaids: bossRaids.map((bossRaid) => {
      return {
        ...bossRaid,
        image: bossImages[bossRaid.origin.target.id]
      }
    })
  }
}
