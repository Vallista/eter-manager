import Contents from '../../components/Contents'
import { useReducer } from 'react'
import { reducer, toCashText, toElText, toEpText } from './reducer'

const LiberationCalculatorPage = () => {
  const [state, dispatch] = useReducer<typeof reducer>(reducer, {
    el: 0.75,
    ep: 0.75,
    now: {
      attack: 0,
      defence: 0,
      health: 0,
      totalAttack: 0,
      totalDefence: 0,
      totalHealth: 0
    },
    goal: {
      attack: 0,
      defence: 0,
      health: 0
    },
    result: {
      el: 0,
      ep: 0,
      cashEl: 0,
      cashEp: 0,
      totalCash: 0
    }
  })

  return (
    <Contents title="해방비용 계산기">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        <div>
          EL 비율 (1억EL 당)
          <input style={{ width: '240px' }} value={state.el} />
        </div>
        <div>
          EP (1EP 당)
          <input style={{ width: '240px' }} value={state.ep} />
        </div>
        <div>
          현재
          <div>
            공격력:{' '}
            <input
              min={0}
              max={100}
              style={{ width: '240px' }}
              type="number"
              value={state.now.attack}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_ATTACK',
                  payload: Number(e.currentTarget.value)
                })
              }
            />
          </div>
          <div>
            방어력:{' '}
            <input
              min={0}
              max={100}
              style={{ width: '240px' }}
              type="number"
              value={state.now.defence}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_DEFENCE',
                  payload: Number(e.currentTarget.value)
                })
              }
            />
          </div>
          <div>
            체력:{' '}
            <input
              min={0}
              max={100}
              style={{ width: '240px' }}
              type="number"
              value={state.now.health}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_HEALTH',
                  payload: Number(e.currentTarget.value)
                })
              }
            />
          </div>
          <div>총 공해방 투자 금액{toCashText(state.now.totalAttack)}원</div>
          <div>총 방해방 투자 금액{toCashText(state.now.totalDefence)}원</div>
          <div>총 체해방 투자 금액{toCashText(state.now.totalHealth)}원</div>
        </div>
        <div>
          목표
          <div>
            공격력:{' '}
            <input
              min={0}
              max={100}
              style={{ width: '240px' }}
              type="number"
              value={state.goal.attack}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_GOAL_ATTACK',
                  payload: Number(e.currentTarget.value)
                })
              }
            />
          </div>
          <div>
            방어력:{' '}
            <input
              min={0}
              max={100}
              style={{ width: '240px' }}
              type="number"
              value={state.goal.defence}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_GOAL_DEFENCE',
                  payload: Number(e.currentTarget.value)
                })
              }
            />
          </div>
          <div>
            체력:{' '}
            <input
              min={0}
              max={100}
              style={{ width: '240px' }}
              type="number"
              value={state.goal.health}
              onChange={(e) =>
                dispatch({
                  type: 'CHANGE_GOAL_HEALTH',
                  payload: Number(e.currentTarget.value)
                })
              }
            />
          </div>
        </div>
        <div>
          <p>EL: {toElText(state.result.el)}</p>
          <p>EL 현금 환산: {toCashText(state.result.cashEl)}원</p>
          <p>EP: {toEpText(state.result.ep)}</p>
          <p>EP 현금 환산: {toCashText(state.result.cashEp)}원</p>
          <p>필요 총 금액: {toCashText(state.result.totalCash)}원</p>
        </div>
      </div>
    </Contents>
  )
}

export default LiberationCalculatorPage
