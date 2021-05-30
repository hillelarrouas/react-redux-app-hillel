const initialState = { arrayQuizze: [] , indexAnswers: []}


const QuizzeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ARRAY_UPDATE': {
            return { ...state, arrayQuizze: action.payload }
        }
        case 'ANSWERS_INDEX':{
            return { ...state, indexAnswers: action.payload }
        }
        // case 'DELETE_USER': {
        //     let filterUser = state.appUser.filter(elm => elm.id !== action.payload.id)
        //     console.log(filterUser)
        //     return {
        //         ...state, appUser: filterUser
        //     }
        // }
        default: {
            return state
        }
    }
}

export default QuizzeReducer

// state.todo[0].id === 0 ? state.todo.slice(0, -1) : state.todo