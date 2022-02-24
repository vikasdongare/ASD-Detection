import React from 'react';
import './index.css';

function HomeHeader(props){
    return(
        <div className = "mt-5" >
            <h3>{props.heading}</h3>
        </div>
    );
}
export default HomeHeader;