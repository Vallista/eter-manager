import dayjs from 'dayjs'
import { createNotificationBossRaidText } from './constants'
import { getBossCycleQueue } from './utils'
import { Store } from '../libs'
import { getDiffAtoB } from '../../utils/date'

// 60000 = 60초
const CHECK_BOSS_DIFF_TIME = 60000

export class BossReminder {
  constructor() {}

  /**
   * 다음 보스 노티를 보냅니다.
   * (현재 시간 기준, UTC 9)
   */
  public notificationNextBossReminder() {
    const nowTime = dayjs().utc().toDate()
    const target = this.findNextBossTime(nowTime)

    const text = createNotificationBossRaidText(target.time, target.info)
    const index = Number(target.info.target.id.slice(7))

    // MEMO: 알람을 보내는 로직
    Store.Notification.notify(text.title, text.body, {
      index
    })
  }

  /**
   * 보스의 시간이 지정한 알람 시간 내에 있는 경우
   */
  public checkBossTimeInSettingAlarmTime(minutes: number[]) {
    const nowTime = dayjs().utc().toDate()
    const nextBossRaid = getBossCycleQueue(nowTime)[0]
    const alarmMinutes = minutes.map((it) =>
      dayjs(nextBossRaid.time).utc().subtract(it, 'minute').toDate()
    )

    const diffList = alarmMinutes.map((minute) => {
      // MEMO: 다음 레이드 시간에서 알람 시간을 뺀 시간을 기준으로 diff를 체크한다.
      return getDiffAtoB(nextBossRaid.time, minute)
    })

    // MEMO: 보스 시간 - 현재 시간
    const nowTimeToMs = getDiffAtoB(nextBossRaid.time, nowTime)

    // MEMO: diff를 체크한 후 해당 숫자가 1분 내외인지 체크한다.
    if (
      diffList.find((it) => {
        const result = Math.abs(nowTimeToMs) - Math.abs(it)
        // MEMO: 이미 지나간 것은 건들지 않는다.
        console.log(result, CHECK_BOSS_DIFF_TIME / 2)
        if (result < -(CHECK_BOSS_DIFF_TIME / 2)) return null
        return Math.abs(nowTimeToMs) - Math.abs(it) < CHECK_BOSS_DIFF_TIME / 2
      })
    ) {
      this.notificationNextBossReminder()
    }
  }

  /**
   * 다음 보스 시간을 가져옵니다.
   *
   * @param targetTime 기준 시간
   */
  public findNextBossTime(targetTime: Date) {
    const nextBossRaid = getBossCycleQueue(targetTime)[0]

    return {
      info: nextBossRaid.origin,
      time: nextBossRaid.time
    }
  }
}
