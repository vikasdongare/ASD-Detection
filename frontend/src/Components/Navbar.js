import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    const { login } = props
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ "color": "#BBBBBB" }} to="/">ASD</Link>
                <div className="d-flex justify-content-end bd-highlight">
                    {login && <Link className="mx-1 btn" style={{ "color": "#BBBBBB" }} onClick={props.logout} to="/login" >Log Out</Link> }
                    {!login && <Link className="mx-1 btn" style={{ "color": "#BBBBBB" }} to="/login" >Login</Link>}
                    {!login && <Link className="mx-1 btn" style={{ "color": "#BBBBBB" }} to="/signup">SignUp</Link>}
                    <Link className="mx-1 btn" style={{ "color": "#BBBBBB" }} to="/aboutus">About Us</Link>
                    <Link className="mx-1 btn" style={{ "color": "#BBBBBB" }} to="/contactus">Contact Us</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
