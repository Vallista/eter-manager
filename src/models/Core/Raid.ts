import { Time } from './Common'

export type Dimension =
  /** 과거 */
  | 'BEFORE'
  /** 현재 */
  | 'NOW'
  /** 또다른미래 */
  | 'ANOTHER'
  /** 리마스터 */
  | 'REMASTER'

/**
 * 레이드의 타입
 */
export type RaidType =
  /** 보스 레이드 */
  | 'BOSS'
  /** 팀 레이드 */
  | 'TEAM'

/**
 * 레이드
 */
export interface Raid {
  /** 레이드 명 */
  name?: string
  /** 레이드 타입 */
  type: RaidType
  /** 레이드 시간 [시, 분] */
  time: Time[]
  /** 지역 */
  location: string
  /** 년도 */
  year: number
  /** 차원 */
  dimension: Dimension
}
