import { Monster } from './Monster'
import { Raid } from './Raid'

export interface BossRaid extends Raid {
  target: Monster
}
