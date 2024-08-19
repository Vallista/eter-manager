import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import updateLocale from 'dayjs/plugin/updateLocale'
import { Time } from '../models/Core/Common'
import 'dayjs/locale/ko'

dayjs.extend(utc)
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

// dayjs.updateLocale('ko', {
//   relativeTime: {
//     future: '%s 후',
//     past: '%s 전',
//     s: '1초',
//     m: '1분',
//     mm: '%d분',
//     h: '한 시간',
//     hh: '%d시간',
//     d: '하루',
//     dd: '%d일',
//     M: '한 달',
//     MM: '%d달',
//     y: '일 년',
//     yy: '%d년'
//   }
// })

dayjs.locale('ko')

export function getDiffAtoB(a: Date, b: Date): number {
  const base = dayjs(a).utcOffset(9)
  const target = dayjs(b).utcOffset(9)

  return base.diff(target)
}

export function getMilisecondsToDate(ms: number): Date {
  return dayjs(ms).toDate()
}

const HOUR_INDEX = 0
const MINUTE_INDEX = 1

export function convertTimeToDate(time: Time): Date {
  const rightNow = dayjs().utcOffset(9)
  const nowYear = rightNow.year()
  const nowMonth = rightNow.month()
  const nowDate = rightNow.date()

  const result = dayjs(new Date(nowYear, nowMonth, nowDate, time[HOUR_INDEX], time[MINUTE_INDEX]))

  return result.utcOffset(9).toDate()
}
