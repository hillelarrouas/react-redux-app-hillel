import React from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../../redux/actions/todoAction'

function DeleteUser() {
    const { id } = useParams()
    const dispatch = useDispatch()

    setTimeout(function () {
        dispatch(deleteUser(id))
    }, 20);


    return (
        <div>
            {id}
        </div>
    )
}

export default DeleteUser
