import { useEffect, useState } from 'react'
import { IPCEventGetBossRaids } from '../../../../models/EventBus/type'
import dayjs from 'dayjs'
import { DIMENSION, MONSTER_SIZE, MONSTER_SKIN } from '../../../../models'

type IPCBossRaidsType = IPCEventGetBossRaids['payload']

const BossRaidPage = () => {
  const [bossRaids, setBossRaids] = useState<IPCBossRaidsType>([])

  useEffect(() => {
    const intervalSendBossRaids = setInterval(() => {
      window.electron.ipcRenderer.send('GET_BOSS_RAIDS')
    }, 1000)
    window.electron.ipcRenderer.on('GET_BOSS_RAIDS', (_, payload) => {
      setBossRaids(payload)
    })
    return () => {
      clearInterval(intervalSendBossRaids)
    }
  }, [])

  return (
    <div>
      {bossRaids.map((it) => (
        <div>
          <div>{it.origin.target.name}</div>
          <div>
            {DIMENSION[it.origin.dimension]} {it.origin.year} {it.origin.location}
          </div>
          <div>{dayjs(it.time.toISOString()).format('MM월 DD일 hh시 mm분')}</div>
          <div>{Math.floor(Math.abs(it.diff) / 1000 / 60)}분 전</div>
          <div>
            {MONSTER_SIZE[it.origin.target.size]} / {MONSTER_SKIN[it.origin.target.skin]}
          </div>
          <br />
          <br />
        </div>
      ))}
    </div>
  )
}

export default BossRaidPage
