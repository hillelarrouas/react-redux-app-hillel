import axios from 'axios';

export const addTodo = (cunterdata) => ({
    type: "ADD_USER",
    payload: cunterdata
})

export const deleteUser = (id) => ({
    type: "DELETE_USER",
    payload: {
        id: id
    }
})


export const car = (numCar) => ({
    type: "CAR",
    payload: {
        numCar: numCar
    }
})


export function fetchCarNumber(idCar) {
    return (dispatch) => {
        axios
            .get(`https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${idCar}`)
            .then(res => {
                console.log(res.data)
                dispatch(car('4635868'))
            })
            .catch(err => {
                console.log(err)
            })
    }

}