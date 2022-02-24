import React, { useEffect, useState } from "react";
import './index.css';
import profile_logo from './profile_logo.png'
import Menubar from "./Menubar";
const host = "http://localhost:5000"

const UserProfile = () => {


  const [user, setuser] = useState({});
  const getuser = async () => {
    // API Call 

    const response = await fetch(`${host}/profile/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      }
    });

    const json = await response.json()
    setuser(json)
  }

  const edituser = async () => {

    const response = await fetch(`${host}/profile/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": localStorage.getItem("token")
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmMzg2OTkyMGQ3NWYyZTllNGY4MDJlIn0sImlhdCI6MTY0MzM3Mzc1OX0.EqH6m3KJdOc-Knr6QdDT67VR7rhvVhEnwEqGkZhZ8yM"
      },
      body: JSON.stringify({
        "name": user.name.toString(),
        "dob": user.dob.toString(),
        "mobileno": user.mobileno.toString(),
        "address": user.address.toString(),
      })
    });
    const json = await response.json()
    if(json.success){
      alert("Profile updated!")
    }
    else{
      alert(json.error)
    }
  }


  useEffect(() => {
    getuser()
    // eslint-disable-next-line
  }, [])

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="container">
        <div className=" MainBody border d-flex rounded-3 shadow-lg border-dark  " style={{ "height": "80vh", "width": "140vh" }}>
          <Menubar />
          <div className="InputContent p-2">
            <div className=" content border border-dark rounded-3 d-flex flex-column align-items-center justify-content-center profile_img">
              <img
                className="border border-5 border-dark rounded-circle"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Upload Profile Picture"
                src={profile_logo}
                height="50%"
                width="50%"
                alt="logo"
                style={{ "cursor": "pointer" }}
              />
            </div>
          </div>
          <div className=" InputContent p-2">
            <div className=" content border border-dark rounded-3 p-3 d-flex flex-column justify-content-center">
              <h1 className="text-center my-4 mx-3">Personal Information</h1>
              <div className="card my-1 border-dark">
                <h5 className="card-header bg-secondary bg-gradient fs-5">
                  Full Name :
                </h5>
                <input className="card-text mx-3 p-1 fs-6 customInput" id="name" name="name" value={user.name ? user.name : "name"} onChange={onChange}></input>
              </div>
              <div className="card my-1 border-dark">
                <h5 className="card-header bg-secondary bg-gradient fs-5">
                  E-Mail :
                </h5>
                <h5 className="card-text mx-3 p-1 fs-6" >{user.email ? user.email : "email"} </h5>
              </div>
              <div className="card my-1 border-dark">
                <h5 className="card-header bg-secondary bg-gradient fs-5">
                  Contact No :
                </h5>
                <input className="card-text mx-3 p-1 fs-6 customInput" id="mobileno" name="mobileno" value={user.mobileno ? user.mobileno : "mobileno"} onChange={onChange}></input>
              </div>
              <div className="card my-1 border-dark">
                <h5 className="card-header bg-secondary bg-gradient fs-5">
                  Birth Date :
                </h5>
                <input className="card-text mx-3 p-1 fs-6 customInput" id="dob" name="dob" value={user.dob ? user.dob : "dob"} onChange={onChange}></input>
              </div>
              <div className="card my-1 border-dark">
                <h5 className="card-header bg-secondary bg-gradient fs-5">
                  Address :
                </h5>
                <input className="card-text mx-3 p-1 fs-6 customInput" id="address" name="address" value={user.name ? user.address : "address"} onChange={onChange}></input>
              </div>
              <button type="button" className="btn btn-warning border-3 rounded-3 border-dark my-4  align-self-center " onClick={edituser}> Edit Profile </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
