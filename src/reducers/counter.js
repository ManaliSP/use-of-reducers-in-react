const counterReducer = (state =0 , action) => {
    console.log("Action state running is :", action.type);
    switch(action.type){
        case 'INCREMENT' :
            return state + action.payload;
        case 'DECREMENT' :
            return state - 1
        default :
            return state

    }
}
export default counterReducer;
