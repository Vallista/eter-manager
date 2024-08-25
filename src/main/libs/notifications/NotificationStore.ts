import { Notification } from './Notification'
import * as bossRaids from '../../../models/Raid'
import { BossRaid } from '../../../models'

import 와이즈원_이미지 from '../../../../resources/monsters/bosses/thie_wise_one.png?asset'
import 울티메이트메거트_이미지 from '../../../../resources/monsters/bosses/ultimate_megert.png?asset'
import 렉스_이미지 from '../../../../resources/monsters/bosses/rax.png?asset'
import 거대나방_이미지 from '../../../../resources/monsters/bosses/big_moth.png?asset'
import 위토생체병기_이미지 from '../../../../resources/monsters/bosses/wito.png?asset'
import 포트리스_이미지 from '../../../../resources/monsters/bosses/fortress.png?asset'
import 문이터_이미지 from '../../../../resources/monsters/bosses/moon_eater.png?asset'
import 고급주택가_이미지 from '../../../../resources/monsters/bosses/unknown.png?asset'
import 패러사이트_이미지 from '../../../../resources/monsters/bosses/mutated_parasite.png?asset'

const notificationImages = [
  와이즈원_이미지,
  울티메이트메거트_이미지,
  렉스_이미지,
  거대나방_이미지,
  위토생체병기_이미지,
  포트리스_이미지,
  문이터_이미지,
  고급주택가_이미지,
  패러사이트_이미지
]

const bossRaidList = Object.entries(bossRaids).map<BossRaid>(([, value]) => {
  return {
    ...value
  }
})

const MAX_NOTIFICATION_BOSS_POOL = bossRaidList.length
const MAX_NOTIFICATION_POOL = 20

/**
 * Singleton Store
 * object pooling을 위함
 */
export class NotificationStore {
  constructor() {
    // README: 보스 알림용 notification 미리 생성
    this.notifications = Array.from(Array(MAX_NOTIFICATION_BOSS_POOL).keys()).map(
      (_, index) => new Notification(notificationImages[index])
    )

    // REAMDE: 일반 알림용 notification
    this.notifications = [
      ...this.notifications,
      ...Array.from(Array(MAX_NOTIFICATION_POOL).keys()).map(() => new Notification())
    ]

    this.createdIndex = 0
  }

  /**
   * 알람을 송신합니다.
   *
   * @param title 타이틀
   * @param body 설명
   */
  public notify(
    title: string,
    body: string,
    options?: { subtitle?: string; index?: number }
  ): void {
    this.notifications[
      options?.index || options?.index === 0 ? options.index : this.createdIndex++
    ].show(title, body, options)

    if (!options?.index && this.createdIndex >= MAX_NOTIFICATION_POOL) {
      this.createdIndex = MAX_NOTIFICATION_BOSS_POOL
    }
  }

  private notifications: Notification[]
  private createdIndex: number
}
