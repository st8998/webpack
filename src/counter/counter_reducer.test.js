import counterReducer from './counter_reducer'
import { INC } from './counter_actions'

test('increase state by 1 on increase action', function () {
  expect(counterReducer(0, { type: INC })).toBe(1)
})
