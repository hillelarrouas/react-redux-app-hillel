import React from "react";
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, deleteUser } from './redux/actions/todoAction'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css'
import DataUser from './view/pages/dataUser/dataUser'
import GetUsers from './view/pages/GetUsers/GetUsers'
import AddUsers from './view/pages/addUsers/addUsers'
import Pag404 from './view/pages/Pag404/pag404'
import SearchCar from './view/pages/SearchCar/SearchCar'
import DeleteUser from './view/pages/DeleteUser/DeleteUser'
import CardSearchCar from './view/pages/CardSearchCar/CardSearchCar'


export default function App() {
  return (
    <Router>
      <div className='cardApp'>
        <ul className='ulLinks'>
          <Link to="/"><li>בית</li></Link>
          <Link to="/getUsers"><li>משתמשים</li></Link>
          <Link to="/addUsers"><li>הוספת משתמשים</li></Link>
          <Link to="/cardSearchCar"><li>חיפוש רכב</li></Link>
        </ul>
        <Switch>
          <Route path="/getUsers">
            <GetUsers />
          </Route>
          <Route path="/addUsers">
            <AddUsers />
          </Route>
          <Route path="/DataUser/:id">
            <DataUser />
          </Route>
          <Route path="/deleteUser/:id">
            <DeleteUser />
          </Route>
          <Route path="/SearchCar/:idCar">
            <SearchCar />
          </Route >
          <Route path="/SearchCar">
            <CardSearchCar />
          </Route >
          <Route path="/cardSearchCar">
            <CardSearchCar />
          </Route >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Pag404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {

  fetch('/get_joke')
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
    .catch(e=>{
      console.log(e)
    })

  return (
    <div>
      <h1>Home</h1>
    </div>);
}


function Button({ typeButton, actionBt }) {
  return (

    <Link to={actionBt}><button>{typeButton}</button></Link>
  )

}

