import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = () => {        
    const { push } = useHistory();

    axiosWithAuth()
        .post('/logout')
        .then(resp => {
            localStorage.removeItem('token')
            push('/');
        }).catch(error => {
            console.log(error)
        })

    return(<div>
        Logged Out
    </div>);
}

export default Logout;