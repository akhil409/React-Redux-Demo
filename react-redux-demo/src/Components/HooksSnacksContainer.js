import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySnacks } from '../Redux/Index'

const HooksSnacksContainer = () => {
    const numOfSnacks = useSelector(state=>state.snacks.numOfSnacks)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>Hooks Snack</h1>
        <h2>No of Snacks - {numOfSnacks}</h2>
        <button onClick={()=>dispatch(buySnacks())}>Buy Snacks</button>
    </div>
  )
}

export default HooksSnacksContainer;