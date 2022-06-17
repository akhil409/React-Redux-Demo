import { BUY_SNACKS } from './SnacksTypes'; 

const initialState={
    numOfSnacks:10
}

const snacksReducer = ( state = initialState , action ) => {
    switch(action.type){
       case BUY_SNACKS:
           return {
               ...state,
               numOfSnacks: state.numOfSnacks-1
           }
        default : return state
    }
}

export default snacksReducer;