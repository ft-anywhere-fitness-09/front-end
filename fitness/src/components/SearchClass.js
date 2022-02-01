import React, { useState } from 'react';


const SearchClass = () => {

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
        <input
          value={""}
          onChange={e => this.handleChange(e)}
          placeholder="Type something to search"
        />
        <br/>
        Map through Axios
      </div>
    )
}

export default SearchClass;