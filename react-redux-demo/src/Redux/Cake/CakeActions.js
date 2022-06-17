//We have define an action which is an object and we have defined an action creator  which is an function that returns an object

import { BUY_CAKE } from "./CakeTypes";  

export const buyCake = ( number = 1 ) => {
    return {
        type: BUY_CAKE,
        payLoad:number 
    }
}