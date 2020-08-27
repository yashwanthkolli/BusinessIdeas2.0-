const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        case 'UPDATE_SCORE':
            return {
                ...state,
                currentUser: {
                    ...state,
                    score: action.payload+1000
                }
            }
        default:
            return state;
    }
}

export default userReducer;