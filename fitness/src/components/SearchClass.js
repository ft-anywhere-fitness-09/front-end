import React, { useEffect, useState } from "react";
import "./search/search.css";
import ClassListItem from "./ClassListItem";
import axios from "axios";


const SearchClass = () => {
  const [classes, setClasses] = useState([]);


  useEffect(() => {
    axios
      .get("https://ft-anywhere-fitness-09.herokuapp.com/api/classes")
      .then((resp) => {
        setClasses(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="col">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Class Type</th>
            <th>Class Date</th>
            <th>Start Time</th>
            <th>Duration</th>
            <th>Intensity Level</th>
            <th>Location</th>
            <th>Max Cass Size</th>
            <th>Instructors</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((classes) => (
            <ClassListItem key={classes.class_id} class={classes} />
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default SearchClass;
