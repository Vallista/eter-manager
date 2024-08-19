import dayjs from 'dayjs'
import { BossRaid, DIMENSION, MONSTER_SIZE, MONSTER_SKIN } from '../../models'

export function createNotificationBossRaidText(time: Date, bossRaid: BossRaid) {
  const hour = time.getHours()
  const minute = time.getMinutes()
  const name = bossRaid?.name ? bossRaid.name : bossRaid.target.name
  const dimension = DIMENSION[bossRaid.dimension]
  const year = bossRaid.year
  const location = bossRaid.location
  const bossSize = MONSTER_SIZE[bossRaid.target.size]
  const bossSkin = MONSTER_SKIN[bossRaid.target.skin]
  const remainingTime = dayjs(time).utc().locale('ko').fromNow(true)

  return {
    title: `보스 ${name} ${remainingTime} 전 / ${hour}시 ${minute}분`,
    body: `위치: ${dimension} > ${year} > 1채널 > ${location} / 크기: ${bossSize} / 피부: ${bossSkin}`
  }
}
