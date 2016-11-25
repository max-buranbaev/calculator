import React from 'react'
import { connect } from 'react-redux'

function Button(props) {
    const { onClick, children, value } = props;
    const disabled = props.status == "start" ? "disabled" : false;
    return (
        <button className="btn btn-default calculator__btn" value={value} onClick={onClick} disabled={disabled}> {children} </button>
    )
}

function getParams(state) {
    return {
        status: state.alertStatus
    }
}

export default connect(getParams)(Button)