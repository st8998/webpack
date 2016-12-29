import React from 'react'
import { Counter } from './counter'
import renderer from 'react-test-renderer'

jest.useFakeTimers()

test('it renders counter', function () {
  const incMock = jest.fn()
  const counter = renderer.create(<Counter incCounter={incMock} counter={0} />)

  let tree = counter.toJSON()
  expect(tree).toMatchSnapshot()

  jest.runTimersToTime(1000)
  expect(incMock.mock.calls.length).toBe(1)
})
