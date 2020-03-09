import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import store from './store'
import routes from './routes'
import { GlobalStyle } from './style'
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {renderRoutes(routes)}
      </Router>
    </Provider>
  )
}

export default App
