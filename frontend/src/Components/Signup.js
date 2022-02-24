import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png'

function Signup() {
    const [credentials, setcredentials] = useState({ name: "", email: "", mobileNumber: "", password: "", cpassword: "", date: "" });
    let navigate = useNavigate();
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (credentials.password == credentials.cpassword) {
            const response = await fetch("http://localhost:5000/auth/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name.toString(),
                    email: credentials.email.toString(),
                    password: credentials.password.toString(),
                    dob: credentials.date.toString(),
                    mobileno: credentials.mobileNumber.toString()
                })
            });
            const json = await response.json()
            console.log(json);
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken);
                navigate("/login");
                // props.setlogin(true);
                alert("Signup Successfully!");
            }
            else {
                alert("Invalid credentials");
            }
        // }
        // else{
        //     alert("Passwords doesn't match")
        // }
    }

    return (
        <div className='container my-3'>
            <div className="card style-card" >
                <div className="row m-0" style={{ "height": "100%", "borderRadius": "50%" }}>
                    <div className="col" style={{ "backgroundColor": "rgba(255, 187, 0, 0.1)", "borderRadius": "32px 0px 0px 32px" }}>
                        <div className="row" style={{ "height": "100%" }}>
                            <div className='d-flex justify-content-center  my-auto'>
                                <img src={logo} alt="LOGO" />
                            </div>
                        </div>
                    </div>
                    <div className="col px-5 my-auto">
                        <form onSubmit={handleSubmit}>
                            <h1 className="mb-5 text-center" style={{ "fontSize": "3em" }}><b>Sign Up</b></h1>
                            <div className="mb-3">
                                {/* <label for="email" className="form-label">Email address</label> */}
                                <input type="text" className="form-control px-3 py-2" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Name" id="name" name="name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control px-3 py-2" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Email address" id="email" name="email" required />
                            </div>
                            <div className="mb-3">
                                {/* <label for="email" className="form-label">Email address</label> */}
                                <input type="text" className="form-control px-3 py-2" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Mobile Number" id="mobileNumber" name="mobileNumber" minLength={10} maxLength={10} required />
                            </div>
                            <div className="mb-3">
                                {/* <label for="password" className="form-label">Password</label> */}
                                <input type="password" className="form-control px-3 py-2" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Password" id="password" name="password" minLength={8} required />
                            </div>
                            <div className="mb-3">
                                {/* <label for="password" className="form-label">Password</label> */}
                                <input type="password" className="form-control px-3 py-2" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} placeholder="Confirm Password" id="cpassword" name="cpassword" minLength={8} required />
                            </div>
                            <div className="mb-3">
                                {/* <label for="email" className="form-label">Email address</label> */}
                                <input type="date" className="form-control px-3 py-2" style={{ "width": "80%", "borderRadius": "8px" }} onChange={onChange} id="date" name="date" required />
                            </div>
                            <button type="submit" className="btn btn-warning p-2" style={{ "width": "80%", "color": "white", "fontSize": "1.2em", "borderRadius": "8px" }}><b>Sign Up</b></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
