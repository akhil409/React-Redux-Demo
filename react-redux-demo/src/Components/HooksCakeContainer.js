import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { buyCake } from '../Redux/Index';


const HooksCakeContainer = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>Using useselector & usedispatch</h1>
        <h1>Num of Cakes - {numOfCakes}</h1>
        <button onClick={()=> dispatch(buyCake())}>Buy a Cake</button>
        <hr />
    </div>
  )
}

export default HooksCakeContainer;