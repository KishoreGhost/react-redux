const initialState = {
    count: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            console.log("h")
            return {
                ...state,
                count : state.count + 1 
            }
        case 'DECREMENT':
            console.log("hi")
            return {
                ...state,
                count: state.count - 1
            }
        default:
            console.log("hii")
            return state;
    }
}

export default reducer;