import React from "react";
import { Link } from "react-router-dom";

const ClassListItem = (props) => {
  const {
    class_id,
    type_id,
    class_name,
    class_date,
    start_time,
    class_duration,
    intensity_id,
    class_location,
    max_class_size,
    class_instructor,
  } = props.class;

  return (
    <tr key={class_id}>
      <td>{class_name}</td>
      <td>{type_id}</td>
      <td>{class_date}</td>
      <td>{start_time}</td>
      <td>{class_duration}</td>
      <td>{intensity_id}</td>
      <td>{class_location}</td>
      <td>{max_class_size}</td>
      <td>{class_instructor}</td>
      <td>
        <Link to={`/classes/${class_id}`} className="view">
          <input type="button" className="btn btn-secondary" value="View" />
        </Link>
      </td>
    </tr>
  );
};

export default ClassListItem;
