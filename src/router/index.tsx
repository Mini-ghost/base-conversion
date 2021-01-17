import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Default from '@/layout/Default'

import Index from '@/page/Index'
import Error from '@/page/Error'

export default function RouterView () {
  return (
    <Router>
      <Switch>
        <Route path='/:target(\d+|binary|octal|decimal|hexadecimal)?'>
          <Default>
            <Index />
          </Default>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}
