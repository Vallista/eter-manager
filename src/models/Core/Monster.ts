/**
 * 몬스터 크기
 * - Large = 대형
 * - Medium = 중형
 * - Small = 소형
 */
export type MonsterSizeType = 'LARGE' | 'MEDIUM' | 'SMALL'

/**
 * 몬스터 피부
 * - NORMAL = 일반
 * - SOFRNESS = 연성
 * - HARDNESS = 강성
 * - MUTATE = 변이
 * - ARMOR = 장갑
 * - HEAVY_ARMOR = 중장갑
 */
export type MonsterSkinType =
  | 'NORMAL'
  | 'SOFTNESS'
  | 'HARDNESS'
  | 'MUTATE'
  | 'ARMOR'
  | 'HEAVY_ARMOR'

/**
 * 몬스터
 */
export interface Monster {
  /** 유니크한 이름 */
  id: string
  /** 이름 */
  name: string
  /** 레벨 */
  level: number
  /** 체력 */
  hp: number
  /** 크기 */
  size: MonsterSizeType
  /** 피부 */
  skin: MonsterSkinType
}
