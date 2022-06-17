import React from "react";
import { connect } from "react-redux";
import { buySnacks } from "../Redux/Index";

const SnacksContainer = (props) => {
  return (
    <div>
      <h1>Buy Snacks - {props.state}</h1>
      <button onClick={props.dispatch}>Buy Snacks</button>

      <hr />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.snacks.numOfSnacks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => dispatch(buySnacks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SnacksContainer);
