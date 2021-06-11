import React from 'react';
import Sidebar from './components/Sidebar';
import Kitchen from "./components/KitchenPage";
import NavBar from './components/NavBar';
import AddKitchen from "./components/AddKitchen";
import KitchenDetails from './components/KitchenDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
          <Switch>
            <Route exact path="/">
              <NavBar pathdata='Kitchen'/>
              <Kitchen/>
            </Route>
            <Route path="/add-kitchen">
              <NavBar pathdata="Add Kitchen"/>
              <AddKitchen />
            </Route>
            <Route path="/kitchen-details">
              <NavBar pathdata="Radha Kitchen"/>
              <KitchenDetails />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
