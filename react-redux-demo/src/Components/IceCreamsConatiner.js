import React from 'react';
import { buyIceCream } from '../Redux/Index';
import { connect } from 'react-redux';


const IceCreamContainer = (props) => {
    console.log(props)
  return (
    <div>
        <h1>Number of IceCream - {props.numOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy a IceCream</button>
    </div>
  )
}

//The State from the redux store is mapped to our component props
const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer);