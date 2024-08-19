import dayjs from 'dayjs'
import { BossRaid } from '../../../models'
import * as bossRaids from '../../../models/Raid/BossRaids'
import { convertTimeToDate, getDiffAtoB } from '../../../utils/date'

export const bossRaidList = Object.entries(bossRaids).map<BossRaid>(([, value]) => {
  return {
    ...value
  }
})

/**
 * 보스의 한 사이클을 가져옵니다.
 * 현재 기준 24시간의 보스를 모두 가져옵니다.
 * e.g.) 현재 4시라면, 다음날 4시까지의 보스를 모두 가져옵니다.
 *
 * @param targetTime 기준 시간
 */
export function getBossCycleQueue(targetTime: Date) {
  // MEMO: 오리지널 데이터의 time이 배열이므로 시간 단위로 체크해서 리스트를 만든다
  // MEMO: 정렬을 오름차순으로 진행한다. (낮을수록 가장 가깝다)
  const diffListByDESC = bossRaidList
    .map((it) => {
      // MEMO: 보스몬스터 레이드 진행시간
      const convertTimes = it.times.map((time) => convertTimeToDate(time))

      // MEMO: 시간 차이
      const diffTimes = convertTimes.map((time) => ({
        // targetTime (대상 시간) - time (보스몬스터 레이드 진행시간)
        diff: getDiffAtoB(targetTime, time),
        time,
        origin: it
      }))

      return diffTimes
    })
    .flat()
    .sort((a, b) => a.diff - b.diff)

  // 대상시간 - 보스레이드 진행시간이 대상시간이 더 많으면 양수 그렇게 되면 diff는 양수가 된다.

  // MEMO: 대상시간이 진행시간보다 늦는 경우 diff가 양수이다.
  const filteredOnlyBeforeTimeDiffListByDESC = diffListByDESC.filter((it) => it.diff > 0)
  // MEMO: 대상시간이 진행시간보다 빠른 경우 diff가 음수이다.
  const filteredOnlyAfterTimeDiffListByDESC = diffListByDESC.filter((it) => it.diff <= 0)

  // MEMO: diff가 양수인 경우 하루를 더해서 다음날로 이동시킨다.
  const mappedReversedPassedBossRaidList = filteredOnlyBeforeTimeDiffListByDESC.map((it) => {
    const toTomorrowTime = dayjs(it.time).utcOffset(9).add(1, 'day').toDate()

    return {
      diff: getDiffAtoB(targetTime, toTomorrowTime),
      time: toTomorrowTime,
      origin: it.origin
    }
  })

  const result = [
    ...filteredOnlyAfterTimeDiffListByDESC.sort((a, b) => a.diff - b.diff).reverse(),
    ...mappedReversedPassedBossRaidList.sort((a, b) => a.diff - b.diff).reverse()
  ]

  return result
}
