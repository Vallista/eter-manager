import { describe, expect, test } from 'vitest'
import { BossReminder } from '.'
import { 거대나방, 와이즈원 } from '../../models'
import dayjs from 'dayjs'

describe('보스 리마인더', () => {
  const now = dayjs().utc()
  const bossReminder = new BossReminder()

  test('12시에 실행시키면 와이즈원 보스를 알려주어야 한다.', () => {
    const rightNow = new Date(now.year(), now.month(), now.date(), 12, 0)
    expect(bossReminder.findNextBossTime(rightNow).info.target.name).toBe(와이즈원.name)
  })

  test('18시에 실행시키면 거대나방 보스를 알려주어야 한다.', () => {
    const rightNow = new Date(now.year(), now.month(), now.date(), 18, 0)
    expect(bossReminder.findNextBossTime(rightNow).info.target.name).toBe(거대나방.name)
  })

  test('23시 50분에 실행시키면 00시 30분의 와이즈원 보스를 알려주어야 한다.', () => {
    const rightNow = new Date(now.year(), now.month(), now.date(), 23, 50)
    expect(bossReminder.findNextBossTime(rightNow).info.target.name).toBe(와이즈원.name)
  })
})
