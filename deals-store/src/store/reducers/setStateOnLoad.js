let initState = {};

const setStateOnLoad = (state=initState, action) => {
    if(action.type === 'SET_STATE') {
        return {...state, load:'stating'}
    } 
    return state;
}

export default setStateOnLoad;