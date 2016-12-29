import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { inc as incCounter } from './counter_actions'

export class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    incCounter: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.timer = window.setInterval(this.props.incCounter, 1000)
  }

  componentWillUnmount() {
    window.clearInterval(this.timer)
  }

  render() {
    return <span>Counted so far: <span style={{ color: 'orangered' }}>{this.props.counter}</span></span>
  }
}

export default connect(
  state => ({ counter: state.counter }),
  { incCounter }
)(Counter)
