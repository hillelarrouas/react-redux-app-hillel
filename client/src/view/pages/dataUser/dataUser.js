import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

function DataUser() {
    const [stateDataUser, setStateDataUser] = useState()
    const { id } = useParams()
    const users = useSelector(state => state.todoReducer.appUser)

    useEffect(() => {
        const user = users.filter(ele => ele.data.id === id)[0];
        setStateDataUser(user)
    }, [])


    if (stateDataUser !== undefined) {
        return (
            <div>
                <div>{stateDataUser.data.username}</div>
                <div>{stateDataUser.data.email}</div>
                <div>{stateDataUser.data.tel}</div>
                <div>{stateDataUser.data.password}</div>
            </div>
        )
    }
    else {
        return (
            <div className='noneData'>לא קיים מידע</div>
        )
    }
}
export default DataUser
