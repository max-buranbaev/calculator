import _ from 'lodash'

const initialState = {
    currentRow: 0,
    result: null,
    rows: [],
    alertText: "Calculator is ready!",
    alertStatus: "ready",
    screenData: "",
    lastInputedNumber: ""
};

export default (state = initialState, action) => {

    const { type, symbol, payload, sign, operator } = action;
    let newRows = [].concat(state.rows);
    switch ( action.type ) {

        case "ADD_SYMBOL":

            return Object.assign({}, state, {
                screenData: symbol == '.' && state.lastInputedNumber == '.' ?  state.screenData : state.screenData + symbol,
                lastInputedNumber: symbol
            });
            break;

        case "CHANGE_SIGN":
            let newSymbol = "";
            if(state.screenData[0] == "(") {
                newSymbol = state.screenData.substring(1, state.screenData.length-2);
            } else {
                newSymbol = "(-" + state.screenData + ")";
            }
            return Object.assign({}, state, { screenData: newSymbol });
            break;

        case "ADD_OPERATOR":
            if(!state.screenData) {
                return state;
            } else {
                if(newRows[state.currentRow]) {
                    newRows[state.currentRow]['expression'] += state.screenData + operator
                } else {
                    newRows[state.currentRow] = {
                        expression: state.screenData + operator,
                        id: _.uniqueId()
                    };
                }
            }

            return Object.assign({}, state, {
                rows: newRows,
                screenData: "",
                lastInputedNumber: state.screenData
            });

            break;

        case "RESET":
            // if(state.screenData && newRows.length) {
            //     let length = newRows[state.currentRow]['expression'].length;
            //     newRows[state.currentRow]['expression'] = newRows[state.currentRow]['expression'].substring(0, length - state.lastInputedNumber.length - 1);
            //     return Object.assign({}, state, {
            //         rows: newRows,
            //         screenData: ""
            //     })
            // } else {
            //     delete newRows[state.currentRow];
            //     return Object.assign({}, state, {
            //         rows: newRows,
            //         currentRow: state.currentRow ? state.currentRow - 1 : state.currentRow,
            //         screenData: ""
            //     })
            // }
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

        case "PREPARE_EXPRESSION":
            if(newRows[state.currentRow] != undefined) {
                newRows[state.currentRow]['expression'] += state.screenData;
            } else {
                return state;
            }

            return Object.assign({}, state, {
                rows: newRows
            });
            break;

        case "CALCULATE_SUCCESS":
            newRows[state.currentRow] = {
                expression: payload.calculation + "=" + payload.result,
                id: payload._id
            };

            if(payload.result === null) {
                return Object.assign({}, initialState, {
                    alertText: "Dividing by zero is a bad idea!",
                    alertStatus: "fail"

                })
            }

            return Object.assign({}, state, {
                alertText: "Success! Result: " + payload.calculation + "=" + payload.result,
                alertStatus: "success",
                currentRow: state.currentRow + 1,
                result: payload.result,
                rows: newRows,
                screenData: ""
            });

            break;

        default:
            return state;
    }
}