import React from 'react'

export default props => {
    const {rows} = props;

    const loggerRows = rows.map(row => <li className="list-unstyled" key={row.id}> {row.expression} </li>)

    return (
        <ul>
            { loggerRows }
        </ul>
    )
}