import { Reducer } from 'react'
import rawData from '../../assets/liberation.json'

const liberationData = rawData.map((it) => ({
  value: Number(it.value),
  attack: {
    el: Number(it.atk_EL),
    ep: Number(it.atk_EP)
  },
  defence: {
    el: Number(it.df_EL),
    ep: Number(it.df_EP)
  },
  hp: {
    el: Number(it.hp_EL),
    ep: Number(it.hp_EP)
  }
}))

export interface ReducerState {
  ep: number
  el: number
  now: {
    attack: number
    defence: number
    health: number
    totalAttack: number
    totalDefence: number
    totalHealth: number
  }
  goal: {
    attack: number
    defence: number
    health: number
  }
  result: {
    el: number
    ep: number
    cashEl: number
    cashEp: number
    totalCash: number
  }
}

export type ReducerActions =
  | ChangeEL
  | ChangeEP
  | ChangeAttack
  | ChangeDefence
  | ChangeHealth
  | ChangeGoalAttack
  | ChangeGoalDefence
  | ChangeGoalHealth

interface ChangeEL {
  type: 'CHANGE_EL'
  payload: number
}

interface ChangeEP {
  type: 'CHANGE_EP'
  payload: number
}

interface ChangeAttack {
  type: 'CHANGE_ATTACK'
  payload: number
}

interface ChangeDefence {
  type: 'CHANGE_DEFENCE'
  payload: number
}

interface ChangeHealth {
  type: 'CHANGE_HEALTH'
  payload: number
}

interface ChangeGoalAttack {
  type: 'CHANGE_GOAL_ATTACK'
  payload: number
}

interface ChangeGoalDefence {
  type: 'CHANGE_GOAL_DEFENCE'
  payload: number
}

interface ChangeGoalHealth {
  type: 'CHANGE_GOAL_HEALTH'
  payload: number
}

export const reducer: Reducer<ReducerState, ReducerActions> = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_EL': {
      return calculate({
        ...prevState,
        el: action.payload
      })
    }
    case 'CHANGE_EP': {
      return calculate({
        ...prevState,
        ep: action.payload
      })
    }
    case 'CHANGE_ATTACK': {
      return calculate({
        ...prevState,
        now: {
          ...prevState.now,
          attack: action.payload
        }
      })
    }
    case 'CHANGE_DEFENCE': {
      return calculate({
        ...prevState,
        now: {
          ...prevState.now,
          defence: action.payload
        }
      })
    }
    case 'CHANGE_HEALTH': {
      return calculate({
        ...prevState,
        now: {
          ...prevState.now,
          health: action.payload
        }
      })
    }
    case 'CHANGE_GOAL_ATTACK': {
      return calculate({
        ...prevState,
        goal: {
          ...prevState.goal,
          attack: action.payload
        }
      })
    }
    case 'CHANGE_GOAL_DEFENCE': {
      return calculate({
        ...prevState,
        goal: {
          ...prevState.goal,
          defence: action.payload
        }
      })
    }
    case 'CHANGE_GOAL_HEALTH': {
      return calculate({
        ...prevState,
        goal: {
          ...prevState.goal,
          health: action.payload
        }
      })
    }
  }
}

function calculate(state: ReducerState): ReducerState {
  const { el, ep, now, goal } = state

  const nowData = {
    attack: now.attack,
    defence: now.defence,
    health: now.health,
    totalAttack: liberationData.slice(0, now.attack + 1).reduce((acc, curr) => {
      acc = acc + calculateElToCash(curr.attack.el, el) + calculateEpToCash(curr.attack.ep, ep)
      return acc
    }, 0),
    totalDefence: liberationData.slice(0, now.defence + 1).reduce((acc, curr) => {
      acc = acc + calculateElToCash(curr.defence.el, el) + calculateEpToCash(curr.defence.ep, ep)
      return acc
    }, 0),
    totalHealth: liberationData.slice(0, now.health + 1).reduce((acc, curr) => {
      acc = acc + calculateElToCash(curr.hp.el, el) + calculateEpToCash(curr.hp.ep, ep)
      return acc
    }, 0)
  }

  // const goalData = {
  //   attack: liberationData[goal.attack].attack,
  //   defence: liberationData[goal.defence].defence,
  //   hp: liberationData[goal.health].hp
  // }

  const target = {
    attack: {
      min: now.attack > 100 ? 100 : now.attack < 0 ? 0 : now.attack,
      max: goal.attack > 100 ? 100 : goal.attack < 0 ? 0 : goal.attack
    },
    defence: {
      min: now.defence > 100 ? 100 : now.defence < 0 ? 0 : now.defence,
      max: goal.defence > 100 ? 100 : goal.defence < 0 ? 0 : goal.defence
    },
    health: {
      min: now.health > 100 ? 100 : now.health < 0 ? 0 : now.health,
      max: goal.health > 100 ? 100 : goal.health < 0 ? 0 : goal.health
    }
  }

  const rangeAttack = calculateTotal(
    liberationData,
    'attack',
    target.attack.min,
    target.attack.max,
    el,
    ep
  )
  const rangeDefence = calculateTotal(
    liberationData,
    'defence',
    target.defence.min,
    target.defence.max,
    el,
    ep
  )
  const rangeHealth = calculateTotal(
    liberationData,
    'hp',
    target.health.min,
    target.health.max,
    el,
    ep
  )

  const result = {
    el: rangeAttack.el + rangeDefence.el + rangeHealth.el,
    ep: rangeAttack.ep + rangeDefence.ep + rangeHealth.ep,
    cashEl: rangeAttack.cashEl + rangeDefence.cashEl + rangeHealth.cashEl,
    cashEp: rangeAttack.cashEp + rangeDefence.cashEp + rangeHealth.cashEp,
    totalCash: rangeAttack.totalCash + rangeDefence.totalCash + rangeHealth.totalCash
  }

  return {
    el,
    ep,
    now: nowData,
    goal,
    result
  }
}

export function toElText(el: number): string {
  const [a, b, c, d, ...back] = el.toString().padStart(8)
  const forwardNumber = Number(`${a}${b}${c}${d}`)
  const backNumber = Number(back.join(''))

  if (forwardNumber === 0) return `${backNumber}억`
  return `${forwardNumber}조 ${backNumber}억`
}

export function toEpText(ep: number): string {
  return ep.toLocaleString()
}

export function toCashText(cash: number): string {
  return cash.toLocaleString()
}

function calculateElToCash(el: number, condition: number): number {
  return el * condition
}

function calculateEpToCash(ep: number, condition: number): number {
  return ep * condition
}

function calculateTotal(
  arr: typeof liberationData,
  key: 'attack' | 'defence' | 'hp',
  start: number,
  end: number,
  elCondition: number,
  epCondition: number
) {
  return arr.slice(start, end + 1 > 100 ? 100 : end + 1).reduce(
    (acc, curr) => {
      const el = acc.el + curr[key].el
      const ep = acc.ep + curr[key].ep
      const cashEl = calculateElToCash(el, elCondition)
      const cashEp = calculateEpToCash(ep, epCondition)

      const result = {
        el,
        ep,
        cashEl,
        cashEp,
        totalCash: cashEl + cashEp
      }

      acc = result
      return acc
    },
    {
      el: 0,
      ep: 0,
      cashEl: 0,
      cashEp: 0,
      totalCash: 0
    }
  )
}
