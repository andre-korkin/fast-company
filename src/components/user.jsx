import React from 'react'
import Qualities from './qualities'


const User = (props) => {
    return (
        <tr id = {props._id}>
            <td>{props.name}</td>
            <td>{<Qualities {...props} />}</td>
            <td>{props.profession.name}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => props.onDelete(props._id)}>Удалить</button></td>
        </tr>
    )
}

export default User