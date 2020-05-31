import React from 'react';
import './Settings.css';
import {connect} from "react-redux";


class Settings extends React.Component {

    changeMaxValue = (e) => {
        let maxValue = Number(e.currentTarget.value)
        this.props.newMaxValue(maxValue)
    }
    changeStartValue = (e) => {
        let startValue = Number(e.currentTarget.value)
        this.props.newStartValue(startValue)
    }
    clickStartValue = () => {
        let startValue = Number(this.props.startValue)
        this.props.clickStartValue(startValue)
    }

    render = () => {
        let disable = this.props.counterValue === 'Incorrect value'
        return (
            <div className="settings">
                <div>
                    <span>Max value</span>
                    <input onChange={this.changeMaxValue} type={'number'}/>
                </div>
                <div>
                    <span>Start value</span>
                    <input onChange={this.changeStartValue} type={'number'}/>
                </div>
                <div>
                    <button disabled={disable} onClick={this.clickStartValue}>set</button>
                </div>
            </div>


        )
    }
}


const mapStateToProps = (state) => {
    return {
        startValue: state.startValue,
        counterValue: state.counterValue
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newMaxValue: (maxValue) => {
            let action = {
                type: 'MAX_VALUE',
                maxValue: maxValue
            }
            dispatch(action)
        },
        newStartValue: (startValue) => {
            let action = {
                type: 'START_VALUE',
                startValue: startValue
            }
            dispatch(action)
        },
        clickStartValue: (startValue) => {
            let action = {
                type: 'CLICK_SET',
                startValue: startValue
            }
            dispatch(action)
        },
    }
}
const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);
export default ConnectedSettings;
