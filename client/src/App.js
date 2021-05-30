import React, { useEffect } from 'react'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Fetch
// import axios from 'axios';

// Redux
import { useDispatch } from 'react-redux'
import { fetchCarNumber} from './redux/actions/todoAction'

// Component
import Page404 from'./view/component/page404/Page404'
import HomePage from './view/component/HomePage/HomePage'
import BoxAnswer from './view/component/BoxAnswer/BoxAnswer'
import './App.css';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCarNumber())
  }, [])

  return (
    <Router>
        <Switch>
        <Route exact path="/Answer">
            <BoxAnswer />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="*">
            <Page404 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;