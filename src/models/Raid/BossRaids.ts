import { BossRaid } from '../Core'
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
} from '../Monster'

export const 보스레이드_와이즈원: BossRaid = {
  type: 'BOSS',
  times: [
    [0, 30],
    [12, 30]
  ],
  year: 1480,
  location: '갈라파고스 제도',
  dimension: 'BEFORE',
  target: 와이즈원
}

export const 보스레이드_울티메이트메거트: BossRaid = {
  type: 'BOSS',
  times: [
    [2, 30],
    [11, 30]
  ],
  year: 2004,
  location: '몽골 국제공항',
  dimension: 'NOW',
  target: 울티메이트메거트
}

export const 보스레이드_렉스: BossRaid = {
  type: 'BOSS',
  times: [
    [3, 30],
    [15, 30]
  ],
  year: 2008,
  location: '51구역 전초기지 임시공항',
  dimension: 'NOW',
  target: 렉스
}

export const 보스레이드_거대나방: BossRaid = {
  type: 'BOSS',
  times: [
    [6, 30],
    [18, 30]
  ],
  year: 2005,
  location: '[CL] 크라카타우섬 화산지대',
  dimension: 'NOW',
  target: 거대나방
}

export const 보스레이드_위토생체병기: BossRaid = {
  type: 'BOSS',
  times: [
    [8, 30],
    [14, 30]
  ],
  year: 2006,
  location: '미지의 섬 연구 단지',
  dimension: 'ANOTHER',
  target: 위토생체병기
}

export const 보스레이드_포트리스: BossRaid = {
  type: 'BOSS',
  times: [
    [5, 30],
    [20, 0]
  ],
  year: 2007,
  location: '남극 전초기지',
  dimension: 'NOW',
  target: 포트리스
}

export const 보스레이드_문이터: BossRaid = {
  type: 'BOSS',
  times: [
    [9, 30],
    [21, 50]
  ],
  year: 2009,
  location: '달 표면 임시 주둔지',
  dimension: 'NOW',
  target: 문이터
}

export const 보스레이드_고급주택가: BossRaid = {
  type: 'BOSS',
  times: [[22, 30]],
  year: 2002,
  location: '평창동 고급주택가',
  dimension: 'NOW',
  target: 고급주택가
}

export const 보스레이드_패러사이트: BossRaid = {
  type: 'BOSS',
  times: [
    [17, 30],
    [23, 30]
  ],
  year: 2009,
  location: '패러사이트 모선 상층부',
  dimension: 'NOW',
  target: 패러사이트
}
