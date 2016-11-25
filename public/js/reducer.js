import _ from 'lodash'

const initialState = {
    result: null,
    calculation: [],
    alertText: "Calculator is ready!",
    alertStatus: "ready",
    screen: "",
    isLastOperator: false,
    logger: []
};

export default (state = initialState, action) => {

    const { type, symbol, payload, sign, operator } = action;

    switch ( action.type ) {

        case "ADD_SYMBOL":

            if(symbol == '.' && state.lastInputedNumber == '.') {
                return state;
            } else {
                if(state.isLastOperator) {
                    return Object.assign({}, state, { screen: symbol, isLastOperator: false });
                } else {
                    return Object.assign({}, state, { screen: state.screen + symbol });
                }
            }
            break;


        case "CHANGE_SIGN":
            if(state.screen) {
                var number = parseFloat(state.screen) * (-1);
            }
            return Object.assign({}, state, { screen: number.toString() });
            break;

        case "ADD_OPERATOR":
            if(!state.screen) return state;

            return Object.assign({}, state, {
                calculation: state.calculation.concat([state.screen, operator]),
                isLastOperator: true
            });

            break;

        case "RESET":
            return initialState;
            break;


        case "CALCULATE_START":
            return Object.assign({}, state, {
                alertText: "Calculating in progress...",
                alertStatus: "start"
            });
            break;

        case "CALCULATE_FAIL":
            return Object.assign({}, state, {
                alertText: "Something goes wrong!",
                alertStatus: "fail"
            });
            break;

        case "CALCULATE_SUCCESS":

            if(payload.result === null) {
                return Object.assign({}, initialState, {
                    alertText: "Dividing by zero is a bad idea!",
                    alertStatus: "fail"

                })
            }

            return Object.assign({}, state, {
                alertText: "Success! Result: " + payload.calculation + "=" + payload.result,
                alertStatus: "success",
                screen: payload.result.toFixed(5),
                isLastOperator: true,
                logger: state.logger.concat(payload),
                calculation: []
            });

            break;

        default:
            return state;
    }
}