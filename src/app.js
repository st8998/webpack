import React, { Component } from 'react'

import ConnectedCounter from './counter/counter'

console.timeEnd('BOOST')

export default class App extends Component {
  render() {
    return (
      <div>
        [COUNTER]: <ConnectedCounter />
      </div>
    )
  }
}
