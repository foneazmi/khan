import { DashboardScreen } from "./ui/screens";
// import { Nav, NavItem } from "./ui/components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Nav>
        <NavItem href="/" isActive>
          Dashboard
        </NavItem>
        <NavItem href="/">Cooming Soon</NavItem>
        <NavItem href="/">Cooming Soon</NavItem>
      </Nav> */}
      <Switch>
        <Route path="/">
          <DashboardScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
