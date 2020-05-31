import {createStore} from "redux";

const initialState = {
    maxValue: 0,
    startValue: 0,
    counterValue: 'press set',

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MAX_VALUE':
            const errMaxValue = action.maxValue === state.startValue ||
            action.maxValue < 0 ||
            action.maxValue < state.startValue
                ? 'Incorrect value' : 'press set'
            return {
                ...state, maxValue: action.maxValue,
                counterValue: errMaxValue
            }
        case 'START_VALUE':
            const errStartValue = action.startValue === state.maxValue ||
            action.startValue < 0 ||
            state.maxValue < action.startValue
                ? 'Incorrect value' : 'press set'
            return {
                ...state, startValue: action.startValue,
                counterValue: errStartValue
            }
        case 'CLICK_INC':
            return {
                ...state, counterValue: action.newCounterValue
            }
         case 'CLICK_RESET':
             return {
                 ...state, counterValue: action.startCounterValue
             }
        case 'CLICK_SET':
            return {
                ...state, counterValue: action.startValue, startValue: action.startValue
            }


        default:
            return state;


    }
}


const store = createStore(reducer);
export default store;