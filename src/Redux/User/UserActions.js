export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

export const updateScore = score => ({
    type: 'UPDATE_SCORE',
    payload: score
})