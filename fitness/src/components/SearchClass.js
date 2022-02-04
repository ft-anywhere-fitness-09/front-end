import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./search/Menu";
import Button from "./search/Button";
import items from "./search/searchData";
import "./search/search.css";

const typeCategories = ["All", ...new Set(items.map((item) => item.type))];
const timeCategories = ["All", ...new Set(items.map((item) => item.time))];
const durationCategories = [
  "All",
  ...new Set(items.map((item) => item.duration)),
];
const levelCategories = ["All", ...new Set(items.map((item) => item.level))];
const locationCategories = [
  "All",
  ...new Set(items.map((item) => item.location)),
];
const attendCategories = ["All", ...new Set(items.map((item) => item.attend))];
const sizeCategories = ["All", ...new Set(items.map((item) => item.size))];

function SearchClass() {
  //Buttons
  const [menuItem, setMenuItem] = useState(items);

  const [typebuttons, typesetButtons] = useState(typeCategories);
  const [timebuttons, timesetButtons] = useState(timeCategories);
  const [durationbuttons, durationsetButtons] = useState(durationCategories);
  const [levelbuttons, levelsetButtons] = useState(levelCategories);
  const [locationbuttons, locationsetButtons] = useState(locationCategories);
  const [attendbuttons, attendsetButtons] = useState(attendCategories);
  const [sizebuttons, sizesetButtons] = useState(sizeCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const typefilteredData = items.filter((item) => item.type === button);
    const timefilteredData = items.filter((item) => item.time === button);
    const durationfilteredData = items.filter(
      (item) => item.duration === button
    );
    const levelfilteredData = items.filter((item) => item.level === button);
    const locationfilteredData = items.filter(
      (item) => item.location === button
    );
    const attendfilteredData = items.filter((item) => item.attend === button);
    const sizefilteredData = items.filter((item) => item.size === button);

    setMenuItem(typefilteredData);
    setMenuItem(timefilteredData);
    setMenuItem(durationfilteredData);
    setMenuItem(levelfilteredData);
    setMenuItem(locationfilteredData);
    setMenuItem(attendfilteredData);
    setMenuItem(sizefilteredData);
  };

  return (
    <div className="Search">
      <div className="title">
        <h2>Available Classes</h2>
      </div>

      <Button button={typebuttons} filter={filter} />
      <Button button={timebuttons} filter={filter} />
      <Button button={durationbuttons} filter={filter} />
      <Button button={levelbuttons} filter={filter} />
      <Button button={locationbuttons} filter={filter} />
      <Button button={attendbuttons} filter={filter} />
      <Button button={sizebuttons} filter={filter} />

      <Menu menuItem={menuItem} />
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
