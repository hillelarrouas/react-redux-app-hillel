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

// let counter = 10
function Home() {
  // // const todo = useSelector(state => state.todoReducer.todo)
  // const dispatch = useDispatch()

  // function add() {
  //   dispatch(addTodo(counter = counter + 10))
  // }

  // function deleteuserid(id) {
  //   dispatch(deleteUser(id))
  // }



  return (
    <div>
      {/* <button onClick={add}>אישור</button>
      <h1>{todo.map(elm => {
        return (<div key={elm.id} onClick={() => deleteuserid(elm.id)}>{elm.id}</div>)
      })}</h1> */}
    </div>);
}


function Button({typeButton , actionBt}){
  return (

    <Link to={actionBt}><button>{typeButton}</button></Link>
  )

}

