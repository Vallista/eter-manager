import dayjs from 'dayjs'
import { useBossRaids } from '../../../../hooks/useBossRaids'
import { BossCard } from '../BossRaidCard'
import styles from './index.module.css'
import { useRef } from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

export const BossRaidCardList = () => {
  const { bossRaids } = useBossRaids()
  const ref = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    isMounted: !!ref.current
  })

  return (
    <div className={styles['container']} {...events} ref={ref}>
      {bossRaids.length === 0
        ? 'Loading...'
        : bossRaids.map((it, index) => (
            <BossCard
              selected={index === 0}
              name={it.origin.target.name}
              image={it.image}
              size={it.origin.target.size}
              skin={it.origin.target.skin}
              estimate={it.diff}
              time={dayjs(it.time.toISOString()).format('HH시 mm분')}
              dimension={it.origin.dimension}
              year={it.origin.year}
              location={it.origin.location}
            />
          ))}
    </div>
  )
}
