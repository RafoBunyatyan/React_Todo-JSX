import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Nav from './Components/Nav';
import ToDo from './Components/ToDo';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Theme from './Components/context';

function App() {
  const [showValue, setShowValue] = useState(false);
  const { theme } = useContext(Theme);

  if (theme) {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  } else {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  };

  useEffect(() => {
    setShowValue(!!localStorage.getItem("token"));
  }, [showValue]);

  return (
    <>
      <Router>
        <Nav
        />
        <Switch>
          <Route path="/" exact>
            <ToDo />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;