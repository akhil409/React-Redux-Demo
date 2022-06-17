import React,{ useState } from 'react';
import { buyCake } from '../Redux/Index';
import { connect } from 'react-redux';


const NewCakeContainer = (props) => {
    const [number,setNumber] = useState(1);
    // console.log(props)

  return (
    <div>
        <h1>Number of Cakes - {props.numOfCakes}</h1> 
        <input type="text" value={number} onChange={e=> setNumber(e.target.value)}/>
        <button onClick={()=> props.buyCake(number)}> Buy {number} Cake</button>
    </div>
  )
}

//The State from the redux store is mapped to our component props
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);