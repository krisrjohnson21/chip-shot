import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import CoursesIndexContainer from "./index/CoursesIndexContainer"
import CourseShowContainer from "./show/CourseShowContainer"
import ProfileContainer from "./profile/ProfileContainer"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CoursesIndexContainer} />
        <Route exact path="/courses" component={CoursesIndexContainer} />
        <Route exact path="/courses/:id" component={CourseShowContainer} />
        <Route exact path="/users/:id/profile" component={ProfileContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
