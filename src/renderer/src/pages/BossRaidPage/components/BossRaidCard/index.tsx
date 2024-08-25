import { FC } from 'react'
import styles from './index.module.css'
import { Label } from '../../../../components/Label'
import {
  DIMENSION,
  Dimension,
  MONSTER_SIZE,
  MONSTER_SKIN,
  MonsterSizeType,
  MonsterSkinType
} from '../../../../../../models'
import classNames from 'classnames'

interface Props {
  selected?: boolean
  name: string
  image: string
  location: string
  time: string
  estimate: number
  dimension: Dimension
  year: number
  size: MonsterSizeType
  skin: MonsterSkinType
}

export const BossCard: FC<Props> = (props) => {
  const {
    selected = false,
    name,
    image,
    time,
    estimate,
    size,
    skin,
    location,
    dimension,
    year
  } = props

  const estimateMinute = Math.floor(Math.abs(estimate) / 1000 / 60)
  const estimateText = `${estimateMinute}분 전`
  const estimateColor =
    estimateMinute < 5
      ? 'red'
      : estimateMinute < 10
        ? 'yellow'
        : estimateMinute < 30
          ? 'purple'
          : 'blue'

  return (
    <div className={classNames([styles.container, selected && styles.selected])}>
      <div className={styles.header}>
        <div className={styles['img-container']}>
          <img src={image} draggable={false} />
          <div className={styles.estimate}>
            <Label color={estimateColor}>{estimateText}</Label>
          </div>
        </div>
      </div>
      <div className={styles.contents}>
        <div>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.information}>
          <p className={styles.dimension}>
            {DIMENSION[dimension]} {year}년
          </p>
          <p className={styles.location}>{location}</p>
          <p className={styles.time}>{time}</p>
        </div>
        <div className={styles.labels}>
          <Label color={size === 'LARGE' ? 'red' : size === 'MEDIUM' ? 'yellow' : 'gray'}>
            {MONSTER_SIZE[size]}
          </Label>
          <Label
            color={
              skin === 'NORMAL'
                ? 'blue'
                : skin === 'MUTATE'
                  ? 'yellow'
                  : skin === 'ARMOR'
                    ? 'gray'
                    : skin === 'HEAVY_ARMOR'
                      ? 'black'
                      : skin === 'HARDNESS'
                        ? 'purple'
                        : 'mint'
            }
          >
            {MONSTER_SKIN[skin]}
          </Label>
        </div>
      </div>
    </div>
  )
}
