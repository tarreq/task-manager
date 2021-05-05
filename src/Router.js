import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Dashboard from "./containers/Dashboard"
import Tasks from "./containers/Tasks"
import Teams from "./containers/Teams"
import Users from "./containers/Users"

const switcher = () => (<Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/dashboard"/>
          )}/>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/tasks">
            <Tasks />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
        </Switch>)

export default switcher