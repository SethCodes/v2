import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Navbar from '../src/components/Navbar';
import Resume from '../src/components/Resume';





function App() {
  
  return (
    <Router>
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/resume" component={Resume} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
