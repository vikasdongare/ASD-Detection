import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png'

function Login(props) {
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(credentials)
        // if (credentials.email == "test@gmail.com" && credentials.password == 12345678) {
        //     alert("Logged In Successfully!");
        //     navigate("/home");
        //     props.setlogin(true);
        // }
        // else {
        //     alert("Wrong Credentials!");
        // }

        const response = await fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email.toString(), password: credentials.password.toString() })
        });
        const json = await response.json()
        // console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/home");
            props.setlogin(true);
            alert("Logged In Successfully!");
        }
        else {
            alert("Invalid credentials");
        }
    }


    return (
        <div className='container my-3'>
            <div className="card style-card" >
                <div className="row m-0" style={{ "height": "100%", "borderRadius": "50%" }}>
                    <div className="col px-5 my-auto">
                        <form data-testid="login-form" onSubmit={handleSubmit}>
                            <h1 className="mb-5" style={{ "fontSize": "3em" }}><b>Get Started <br />for Free!</b></h1>
                            <div className="mb-3">
                                {/* <label for="email" className="form-label">Email address</label> */}
                                <input type="email" className="form-control px-3 py-2 login-input" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Email address" id="email" name="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                {/* <label for="password" className="form-label">Password</label> */}
                                <input type="password" className="form-control px-3 py-2 login-input" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Password" id="password" name="password" minLength={8} required />
                            </div>
                            <button type="submit" className="btn btn-warning p-2" style={{ "width": "80%", "color": "white", "fontSize": "1.2em", "borderRadius": "8px" }}><b>Login</b></button>
                        </form>
                    </div>
                    <div className="col" style={{ "backgroundColor": "rgba(255, 187, 0, 0.1)", "borderRadius": "0px 32px 32px 0px" }}>
                        <div className="row" style={{ "height": "100%" }}>
                            <div className='d-flex justify-content-center  my-auto'>
                                <img src={logo} alt="LOGO" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
