//Reducer is a function which accepts a state and action as a parameters and returns a new function
//In Reducer we defined a initial State as an object where numnber of cakes as 10

import { BUY_CAKE } from "./CakeTypes"

const initialState = {
    numOfCakes: 10
}

//Reducer Function
const cakeReducer = ( state = initialState, action ) => {
    switch(action.type){
      case BUY_CAKE: 
         return {
          ...state,
          numOfCakes: state.numOfCakes - action.payLoad
      }
      default:
          return state;
    }
}

export default cakeReducer;