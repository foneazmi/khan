import { DashboardScreen } from "./ui/screens";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return <DashboardScreen />;
  // return (
  //   <Router>
  //     <Switch>
  //       <Route path="/">
  //         <DashboardScreen/>
  //       </Route>
  //     </Switch>
  //   </Router>
  // );
}

export default App;
