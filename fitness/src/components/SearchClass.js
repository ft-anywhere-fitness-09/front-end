import React, { useState } from "react";
import styled from "styled-components";
import Menu from './search/Menu';
import Button from './search/Button';
import items from './search/searchData';
import SearchBar from "./search/SearchBar";
import './search/search.css'

const allCategories = ['All', ...new Set(items.map(item => item.type))];

console.log(allCategories);

function SearchClass() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{
    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.type ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className="Search">
       
       <div className="title">
         <h2>
           Class Search
         </h2>
       </div>

       {/* <SearchBar/> */}

      <Button button={buttons} filter={filter} />
       <Menu menuItem={menuItem}/>

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
