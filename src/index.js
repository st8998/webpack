import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { AppContainer } from 'react-hot-loader'
import App from './app'


import rootReducer from './root_reducer'
const middleware = applyMiddleware(thunk)
const store = createStore(rootReducer, middleware)


const render = () => ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

render()

if (module.hot) {
  module.hot.accept('./app', render)
  module.hot.accept('./root_reducer', () => {
    console.log('HOT SWAP REDUCER')
    store.replaceReducer(rootReducer)
  })
}
