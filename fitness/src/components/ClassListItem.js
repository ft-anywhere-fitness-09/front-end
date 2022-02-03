import React from "react";
import { Link } from 'react-router-dom';


const ClassListItem = (props) => {
    const { id, name, type, time, duration, level, location, attend, size } = props.classes;


    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{type}</td>
            <td>{time}</td>
            <td>{duration}</td>
            <td>{level}</td>
            <td>{location}</td>
            <td>{attend}</td>
            <td>{size}</td>
            <td>
                <Link to={`/classes/${id}`} className="view">
                <input type="button" className="btn btn-secondary" value="View"/>
                </Link>
            </td>
        </tr>
    )

}

export default ClassListItem;

