import React from 'react'

export default props => {
    const {rows} = props;

    const loggerRows = rows.map(row => <li className="list-unstyled" key={row._id}> {row.calculation + " = " + row.result} </li>)

    return (
        <ul>
            { loggerRows }
        </ul>
    )
}