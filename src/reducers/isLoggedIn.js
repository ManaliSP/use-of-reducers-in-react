
const loggedReducer = (state = false , action) => {
    switch (action.type) {
        case 'SIGN_IN' :
            return !state
        default :
        return state
    }
};
export default loggedReducer;














// const increment = () =>{
//     return {
//       type : 'INCREMENT'
//     };
//   };

//   const  decrement= () =>{
//     return {
//       type : 'DECREMENT'
//     };
//   };

//   const counter =  (state = 0, action) =>
//   {
//     switch(action.type){
//       case 'INCREMENT' :

//         return state + 1
//       case 'DECREMENT' :
//           return state - 1
//     }
//   };

//   let store = createStore(counter)
//   store.subscribe(( ) => console.log(store.getState()));
//   store.dispatch(increment())
//   store.dispatch(decrement())
//   store.dispatch(decrement())
