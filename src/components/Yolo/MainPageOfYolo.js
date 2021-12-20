import React, { Component } from 'react'
import YoloCombined from './YoloCombined';
import { useLocation } from 'react-router-dom';

const MainPageOfYolo = (props) => {
    const { search } = useLocation();
    const query_string = search.substring(1);
    const q = query_string.substring(0,3);
    const id = query_string.substring(3);
    
        return (
            <div>
                <YoloCombined userID={props.userID} id={id}></YoloCombined>
            </div>
        );

}




export default MainPageOfYolo;