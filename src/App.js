import {
  BrowserRouter as Router,
} from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Routes from './Router'
import TopNav from './components/TopNav'

function App() {
  return (
    <Router>
      <TopNav />
      <Routes />
    </Router>
  );
}

export default withAuthenticator(App);
