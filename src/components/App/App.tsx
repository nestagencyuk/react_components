import * as React from 'react'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/**
 * Styles
 */
import './App.scss'

/**
 * Components
 */
import { Page } from '@components/Page'
import { Header } from '@components/Header'
import { Navigation } from '@components/Navigation'

const App: React.FC<App.IProps> = (props) => {
  const { navigation, pages } = props
  const [cursor, setCursor] = useState(null)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => setCursor({ x: e.clientX, y: e.clientY }))
  }, [])

  return (
    <Fragment>
      <Router>
        <Header>{navigation && <Navigation {...navigation} />}</Header>
        <Switch>
          {pages.map((x: any, i: number) => (
            <Route key={`route-${i}`} path={x.path} exact={x.exact}>
              {(router: any) => <Page router={router} config={x.config} />}
            </Route>
          ))}
        </Switch>
      </Router>
      {cursor && <span className={'cursor'} style={{ left: cursor.x, top: cursor.y }}></span>}
    </Fragment>
  )
}

export default App
