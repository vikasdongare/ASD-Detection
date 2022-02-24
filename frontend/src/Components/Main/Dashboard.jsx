import React from 'react';
import MainBody from './MainBody';
import './index.css';

function Dashboard(){
    return(
        <>
            <div className="background bg-light d-flex align-items-center justify-content-center" >
                <MainBody/>
            </div>
        </>
    );
}
export default Dashboard;