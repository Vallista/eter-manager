import { Dimension, MonsterSizeType, MonsterSkinType } from '../Core'

export const DIMENSION: Record<Dimension, string> = {
  BEFORE: '과거',
  NOW: '현재',
  ANOTHER: '또 다른 미래',
  REMASTER: '리마스터'
}

export const MONSTER_SIZE: Record<MonsterSizeType, string> = {
  LARGE: '대형',
  MEDIUM: '중형',
  SMALL: '소형'
}

export const MONSTER_SKIN: Record<MonsterSkinType, string> = {
  NORMAL: '일반',
  SOFTNESS: '연성',
  HARDNESS: '강성',
  MUTATE: '변이',
  ARMOR: '장갑',
  HEAVY_ARMOR: '중장갑'
}
