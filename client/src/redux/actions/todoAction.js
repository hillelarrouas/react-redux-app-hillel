import axios from 'axios';

export const updateArray = (array) => ({
    type: "ARRAY_UPDATE",
    payload: array
})


export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: {
        id: id
    }
})


export const answersIndex = (ind) => ({
    type: "ANSWERS_INDEX",
    payload: {
        index: ind
    }
})






export function fetchCarNumber() {
    return (dispatch) => {
        axios
            .get('/getshalot')
            .then(res => {
                console.log(res.data)
                dispatch(updateArray(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}
