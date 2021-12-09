import React from 'react'


const User = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{}</td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td><button type="button" className="btn btn-danger">Удалить</button></td>
        </tr>
    )
}

export default User