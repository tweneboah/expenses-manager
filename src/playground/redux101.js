import React from 'react';
import {createStore} from 'redux'

const store = createStore((state ={count: 0, amount: 10}, action) => {
    switch(action.type){
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number'? action.incrementBy: -10
        return {
            ...state,
            count: state.count + incrementBy,
            amount: state.amount + 20,
            
        }
        
        case 'DECREMENT':
            const decrementBy = action.decrementBy > 10 ? action.decrementBy: 20
            return {
                ...state,
                count: state.count  - decrementBy,
                amount: state.amount + 10
            }

            case 'RESET':
                return {
                    ...state,
                    count: 0,
                    amount: state.amount + 10
                }
        default:
            return state
    }
    
    
});

//This keep track of history to your store
 const unsubscribe =  store.subscribe(() => {
    console.log(store.getState())
 })

//Actions: This is an object send to the store

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 100
});



//decrement

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 1
});
unsubscribe()
store.dispatch({
    type: 'RESET'
})




console.log(store.getState())
const Redux101 = (props) => {
    return (
        
       <div>
<h1>Redux101</h1>
       </div>
    );
};

export default Redux101;