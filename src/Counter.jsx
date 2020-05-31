import React from 'react';
import './Counter.css';
import {connect} from "react-redux";


class Counter extends React.Component {

    plusCounterValue = () => {
        let newCounterValue = this.props.counterValue + 1;
        this.props.plusCounterValue(newCounterValue)
    }
    resetValue = () => {
        let startCounterValue = this.props.startValue
        this.props.resetCounterValue(startCounterValue)
    }


  render = () => {
        let disable = this.props.counterValue === 'Incorrect value' ||
            this.props.counterValue === this.props.maxValue
    return (
        <div className="counter">
          <div>
            <span>{this.props.counterValue}</span>
          </div>
          <div>
            <button disabled={disable} onClick={this.plusCounterValue}>inc</button>
            <button onClick={this.resetValue}>reset</button>
          </div>
        </div>
    )}}

const mapStateToProps = (state) => {
  return {
      counterValue: state.counterValue,
      startValue: state.startValue,
      maxValue: state.maxValue
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        plusCounterValue: (newCounterValue) => {
            let action = {
                type: 'CLICK_INC',
                newCounterValue: newCounterValue
            }
            dispatch(action)
        },
        resetCounterValue: (startCounterValue)=> {
            let action = {
                type: 'CLICK_RESET',
                startCounterValue: startCounterValue
            }
            dispatch(action)
        },
    }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
