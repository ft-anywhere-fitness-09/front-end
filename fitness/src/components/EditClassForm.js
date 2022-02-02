import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const EditClassForm = (props) => {
	// const { push } = useHistory();
    const { id } = useParams();

	const { updateClasses } = props;
	const [ classes, setClasses] = useState({
        name: "",
        type: "",
        time: "",
        duration: 0,
        level: 0,
        location: "",
        attend: 0,
        size: 0,
	});

   
    useEffect(()=>{
        // axios.get(`http://localhost:9000/api/classes/${id}`)
        //     .then(res=>{
        //         setClasses(res.data);
        //     })
	}, [id]);
	
	const handleChange = (e) => {
        setClasses({
            ...classes,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.put(`http://localhost:9000/api/classes/${id}`, classes)
        //     .then(resp=>{
        //         updateClasses(resp.data);
        //         push(`/classes/${classes.id}`);
		// 	})
		// 	.catch(error=>{
		// 		console.log(error);
		// 	})
	}
    const { name, type, time, duration, level, location, attend, size } = classes;

    return (
	    <ComponentContainer>
      <StyledHeader>Edit {classes.name}</StyledHeader>

      <form onSubmit={handleSubmit}>
        <FormDiv>
          <ModalContainer>
            <FormGroup className="form-group">
              <label htmlFor="name">Name:</label>
              <br />
              <Input
                onChange={handleChange}
                value={name}
                name="name"
                id="name"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="type">Class Type:</label>
              <br />
              <Input
                onChange={handleChange}
                value={type}
                name="type"
                id="type"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="time">Class Time:</label>
              <br />
              <select
                style={{
                  padding: "1em",
                  width: "60%",
                  backgroundColor: "#a9cbfa",
                }}
                onChange={handleChange}
                value={time}
                name="time"
                id="time"
              >
                <option value={"0:00-1:00"}>0:00-1:00</option>
                <option value={"2:00-3:00"}>2:00-3:00</option>
                <option value={"3:00-4:00"}>3:00-4:00</option>
                <option value={"4:00-5:00"}>4:00-5:00</option>
                <option value={"5:00-6:00"}>5:00-6:00</option>
                <option value={"6:00-7:00"}>6:00-7:00</option>
                <option value={"7:00-8:00"}>7:00-8:00</option>
                <option value={"8:00-9:00"}>8:00-9:00</option>
                <option value={"9:00-10:00"}>9:00-10:00</option>
                <option value={"10:00-11:00"}>10:00-11:00</option>
                <option value={"12:00-13:00"}>12:00-13:00</option>
                <option value={"13:00-14:00"}>13:00-14:00</option>
                <option value={"14:00-15:00"}>14:00-15:00</option>
                <option value={"15:00-16:00"}>15:00-16:00</option>
                <option value={"16:00-17:00"}>16:00-17:00</option>
                <option value={"17:00-18:00"}>17:00-18:00</option>
                <option value={"18:00-19:00"}>18:00-19:00</option>
                <option value={"19:00-20:00"}>19:00-20:00</option>
                <option value={"20:00-21:00"}>20:00-21:00</option>
                <option value={"21:00-22:00"}>21:00-22:00</option>
                <option value={"22:00-23:00"}>22:00-23:00</option>
                <option value={"23:00-0:00"}>23:00-0:00</option>
              </select>
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="duration">Class Duration:</label>
              <br />
              <Input
                onChange={handleChange}
                value={duration}
                name="duration"
                id="duration"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="level">Intensity Level :</label>
              <br />
              <Input
                onChange={handleChange}
                value={level}
                name="level"
                id="level"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="location">Class location:</label>
              <br />
              <Input
                onChange={handleChange}
                value={location}
                name="location"
                id="location"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor="attend">Number of Attendees:</label>
              <br />
              <Input
                onChange={handleChange}
                value={attend}
                name="attend"
                id="attend"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <label htmlFor=" size">Class size:</label>
              <br />
              <Input
                onChange={handleChange}
                value={size}
                name="size"
                id="size"
              />
            </FormGroup>
            {/* {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            } */}
            <Button>Create Class</Button>
          </ModalContainer>
        </FormDiv>
      </form>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;
const ModalContainer = styled.div`
  width: 500px;
  background: #ffdb58;
  padding: 2rem;
  text-align: center;
`;

const StyledHeader = styled.h1`
  max-width: 100%;
`;

const ImageDiv = styled.div`
  width: 40%;
`;

const ImgSrc = styled.img`
  height: 30rem;
  border-style: none;
  background-color: #fa8c80;
`;
const FormDiv = styled.div`
width: 40%

justify-content: center;
align-items: center;

`;
const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: solid black 3px;
  border-radius: 5px;
  font-size: 1rem;
  padding: 1rem 0;
  width: 60%;
  background-color: #a9cbfa;
`;

const Button = styled.button`
  background-color: #7d98ec;
  border-radius: 5px;
  padding: 1rem;
  width: 30%;
`;
export default EditClassForm;