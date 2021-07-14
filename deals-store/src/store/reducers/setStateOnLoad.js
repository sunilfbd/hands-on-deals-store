let initState = {
    prodList:[]
};

const setStateOnLoad = (state=initState, action) => {
    if(action.type === 'SET_STATE') {
        return {
            prodList: action.payload
        }
    } 
    return state;
}

export default setStateOnLoad;