import React from 'react'
import classNames from 'classnames'

export default props => {
    const { status, text } = props;
    const alertClasses = classNames({
        "alert": true,
        "alert-info": status == "ready",
        "alert-success": status == "success",
        "alert-warning": status == "start",
        "alert-danger": status == "fail"
    });

    return (
        <div className={alertClasses}>{text}</div>
    )
}