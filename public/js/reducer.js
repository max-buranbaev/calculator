const initialState = {
    currentRow: 0,
    rows: []
};

export default (state = [], action) => {

    const { type, symbol } = action;

    switch ( action.type ) {
        case "ADD_OPERAND_OR_OPERATOR":
            let newRows = [].concat(state.rows);
            newRows[state.currentRow] += symbol;
            return Object.assign({}, state, {
                rows: newRows
            });

        default:
            return state;
    }
}