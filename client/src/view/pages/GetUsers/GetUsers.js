import React from 'react'
import { useSelector } from 'react-redux'
import './GetUsers.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function GetUsers() {
  const users = useSelector(state => state.todoReducer.appUser)

  if (users[0]) {
    return (
      <table>
        <thead>
          <tr>
            <th>---</th>
            <th>שם משתמש</th>
            <th>פלאפון</th>
            <th>מייל</th>
            <th>סיסמה</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elm, index) => {
            return (
              <tr key={index}>
                <td><Link to={`/DataUser/${elm.id}`} className="linkRouterGetUsers">הצג</Link> <Link to={`/deleteUser/${elm.id}`} className="linkRouterGetUsers">מחק</Link></td>
                <td>{elm.username}</td>
                <td>{elm.tel}</td>
                <td>{elm.email}</td>
                <td>{elm.password}</td>
              </tr>)
          })}
        </tbody>
      </table>
    )
  }
  else {
    return (
      <div className="noneData">אין משתמשים להצגה
        <br /><Link to="/addUsers" className="linkRouterGetUsers">לחץ כאן</Link> כדי להוסיף משתמשים
      </div>
    )
  }
}

export default GetUsers
