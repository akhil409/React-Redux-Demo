import React from 'react';
import { buyCake } from '../Redux/Index';
import { connect } from 'react-redux';


const CakeContainer = (props) => {
    console.log(props) 
  return (
    <div>
        <h1>Normal Functionality</h1>
        <h1>Number of Cakes - {props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy a Cake</button>
        <hr />
    </div>
  )
}

//The State from the redux store is mapped to our component props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);