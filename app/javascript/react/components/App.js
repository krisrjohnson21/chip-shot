import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import CoursesIndexContainer from './index/CoursesIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CoursesIndexContainer} />
        <Route exact path="/courses" component={CoursesIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
