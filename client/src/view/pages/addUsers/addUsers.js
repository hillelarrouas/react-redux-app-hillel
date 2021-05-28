import React,{useState} from 'react'
import './addUsers.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../redux/actions/todoAction'



function AddUsers() {
    const [mess ,setMess] = useState('')
    const dispatch = useDispatch()

    function addUserSubmit(e) {
        e.preventDefault()
        const username = e.target.children.userName.value
        const tel = e.target.children.tel.value
        const email = e.target.children.email.value
        const password = e.target.children.password.value
        const rendomid = Math.random().toString(36).slice(2)

        if (username.length === 0){
            setMess('הזן שם משתמש')
        }else if (tel.length === 0){
            setMess('הזן מספר טלפון')
        }else if (email.length === 0){
            setMess('הזן כתובת מייל')
        }else if (password.length === 0){
            setMess('הזן סיסמה')
        }else{
            dispatch(addTodo({username,tel,email,password,id:rendomid}))
            setMess('הוספת המשתמש בוצע בהצלחה')
            // setTimeout(function(){ setMess('') }, 2000);
            e.target.reset()
        }
    }


    return (
        <div>
            <form onSubmit={addUserSubmit} className='formAddUser'>
                <input type="text" placeholder="שם משתמש" name="userName" className='inputTextAddUser'/><br />
                <input type="tel" placeholder="פלאפון" name="tel" className='inputTextAddUser'/><br />
                <input type="text" placeholder="מייל" name="email" className='inputTextAddUser'/><br />
                <input type="password" placeholder="סיסמה" name="password" className='inputTextAddUser'/><br />
                <input type="submit" value='הוספה' className='inputTypeSubmitAddUser'/>            
                <div>{mess}</div>
            </form>
        </div>
    )
}

export default AddUsers
