import * as React from 'react'
import { Fragment } from 'react'
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

/**
 * A main wrapper component which dynamically generating all routes
 * based off of a pages array props
 */
const App: React.FC<App.IProps> = ({ navigation, pages }) => (
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
  </Fragment>
)

export default App
