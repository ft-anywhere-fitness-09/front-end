import React, { useState } from 'react';
import styled from 'styled-components';

const ClassForm = () => {
    const [state, setState] = useState({
        name: "",
        type: "",
        time: "",
        duration: "",
        level: 0,
        location:"",
        attend:0,
        size:0
    });

    const handleSubmit = () => {
        
    }

    const handleChange = () => {

    }

    return(
        <ComponentContainer>
            <StyledHeader>Create a New Class</StyledHeader>
           
                <form onSubmit={handleSubmit}>
                <FormDiv>
                    <ImageDiv>
                        <ImgSrc src="https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    </ImageDiv>
                   
                    <div className="form-group">
                  
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="type">Class Type:</label><br/>
                <input onChange={handleChange} value={state.type} name="type" id="type" />
            </div>
            <div className="form-group">
                <label htmlFor="time">Class Time:</label><br/>
                <select onChange={handleChange} value={state.time} name="time" id="time" >
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
            </div>
            <div className="form-group">
                <label htmlFor="duration">Class Duration:</label><br/>
                <input onChange={handleChange} value={state.duration} name="duration" id="duration" />
            </div>
            <div className="form-group">
                <label htmlFor="level" >Intensity Level :</label><br/>
                <input onChange={handleChange} value={state.level} name="level" id="level" />
            </div>
            <div className="form-group">
                <label htmlFor="location">Class location:</label><br/>
                <input onChange={handleChange} value={state.location} name="location" id="location" />
            </div>
            <div className="form-group">
                <label htmlFor="attend">Number of Attendees:</label><br/>
                <input onChange={handleChange} value={state.attend} name="attend" id="attend" />
            </div>
            <div className="form-group">
                <label htmlFor=" size">Class size:</label><br/>
                <input onChange={handleChange} value={state.size} name="size" id="size" />
            </div>
            {/* {
                errorMessage && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {errorMessage}</div>
            } */}
            <button>Create Class</button>
            </FormDiv>
                </form>
              
        </ComponentContainer>
    )

}

const ComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
 
`;

const StyledHeader = styled.h1`
max-width: 100%;

`;

const ImageDiv = styled.div`
width: 40%


`;

const ImgSrc = styled.img`
height: 50rem;
border-style: solid;
`
const FormDiv = styled.div`
width: 40%

justify-content: center;
align-items: center;

`

export default ClassForm;