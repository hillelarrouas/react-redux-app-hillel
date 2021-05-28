const initialState = { appUser: [] }



const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            console.log(action.payload)
            return { ...state, appUser: [...state.appUser, action.payload] }
        }
        case 'DELETE_USER': {
            let filterUser = state.appUser.filter(elm => elm.id !== action.payload.id)
            console.log(filterUser)
            return {
                ...state, appUser: filterUser
            }
        }
        default: {
            return state
        }
    }
}


export default todoReducer

// state.todo[0].id === 0 ? state.todo.slice(0, -1) : state.todo