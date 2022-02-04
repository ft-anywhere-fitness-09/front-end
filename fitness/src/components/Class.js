import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

const Class = (props) => {
    const { updateClasses } = props;

    const [classes, setClasses] = useState('');

    const { class_id } = useParams();
    const { push } = useHistory();

    useEffect(()=>{
        axios.get(`https://ft-anywhere-fitness-09.herokuapp.com/api/classes/${class_id}`)
            .then(resp=>{
                console.log(resp)
                // setClasses(resp.data);
            })
            .catch(error=>{
                console.log({error});
            })
    }, [class_id]);

    const handleDelete = () => {
        // axios.delete(``)
        //     .then(resp=>{
        //         updateClasses(resp.data);
        //         push('/classes')
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     })
    }

    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{classes.name} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Class Name: <strong>{classes.name}</strong></label>
                            </div>
                            <div>
                                <label>Class Type: <strong>{classes.type}</strong></label>
                            </div>
                            <div>
                                <label>Start Time: <strong>{classes.time}</strong></label>
                            </div>
                            <div>
                                <label>Duration: <strong>{classes.duration}</strong></label>
                            </div>
                            <div>
                                <label>Intensity Level: <strong>{classes.level}</strong></label>
                            </div>
                            <div>
                                <label>Location: <strong>{classes.location}</strong></label>
                            </div>
                            <div>
                                <label>Number of Attendees: <strong>{classes.attend}</strong></label>
                            </div>
                            <div>
                                <label>Max Class Size: <strong>{classes.size}</strong></label>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <Link to={`/classes/edit/${classes.class_id}`} className="m-2 btn btn-success">Edit</Link>
                            <span className="delete"><input onClick={handleDelete} type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Class;