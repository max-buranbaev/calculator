import React from 'react'

export default props => {
    const { onClick, children, value } = props;
    return (
        <button className="btn btn-default calculator__btn" value={value} onClick={onClick}> {children} </button>
    )
}