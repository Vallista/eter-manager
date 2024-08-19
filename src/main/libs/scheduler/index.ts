import schedule from 'node-schedule'

export class Scheduler {
  constructor() {}

  public subscribe(func: () => void) {
    // README: 부하를 많이 주지 않기 위해 1분 단위로 tick을 체크한다.
    schedule.scheduleJob('* * * * *', func)
  }
}
