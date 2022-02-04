import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./search/search.css";
import ClassListItem from './ClassListItem'
import { useParams } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";


const SearchClass = ()=> {

  const [ classes, setClasses ] = useState([]);
  const { class_id } = useParams();

  useEffect(() => {
    axios.get("https://ft-anywhere-fitness-09.herokuapp.com/api/classes")  
      .then(resp =>{
        setClasses(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
},[]);

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
                  {
                      classes.map(classes=><ClassListItem key={classes.class_id} class={classes}/>)
                  }
              </tbody>
          </table>
        
      </div>
  );
}

const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: solid black 3px;
  border-radius: 5px;
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
  background-color: #a9cbfa;
`;

export default SearchClass;
