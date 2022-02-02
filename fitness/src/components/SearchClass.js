import React, { useState } from 'react';
import ClassListItem from './ClassListItem';

const SearchClass = (props) => {
    const { classes } = props;
    const [state, setState] = useState({
          
    });

    const handleChange = (event) => {
        // setState({
        //     ...state,
        //     [event.target.name]: event.target.value
        // })
    }

    return (
        <div>
            <h1>Search for Classes!</h1>
        <input
          value={""}
          onChange={e => this.handleChange(e)}
          placeholder="Search Here"
        />
        <br/>
        <h1>Available Classes</h1>
        <div className="col">
            <table className="table">
                <thead>
                <tr>
                    <th>Class Name</th>
                    <th>Class Type</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th>Intensity Level</th>
                    <th>Location</th>
                    <th>Number of Attendees</th>
                    <th>Max Class Size</th>
                </tr>
                </thead>

                <tbody>
                    {/* {
                        classes.map(class=><ClassListItem key={class.id} class={class}/>)
                    } */}
                </tbody>
            </table>
        </div>
      </div>
    )
}

export default SearchClass;