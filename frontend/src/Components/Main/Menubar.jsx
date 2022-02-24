import React from "react";
import './index.css';
import AutismLogo from './AutismLogo.jfif'
import { Link } from "react-router-dom";
// import HomeIcon from '@mui/icons-material/Home';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import HistoryIcon from '@mui/icons-material/History';

const Menubar = () => {
  return (
    <div className="nav border d-flex flex-column align-items-center rounded-start bg-secondary ">
      <Link className="nav-link " to="/home">
        <img
          className="rounded-circle my-3 border"
          src={AutismLogo}
          alt="logo"
          width="100%"
          height="75%"
        />
      </Link>
      <div className="navbar-nav flex-start ">
        <Link className="nav-link text-white " to="/home">
          <span className = " d-flex align-items-center ">
            {/* <HomeIcon/> */}<i className="fas fa-home"></i>
            &nbsp;Home</span>
        </Link>
        <Link className="nav-link text-white" to="/profile">
          <span className = " d-flex align-items-center ">
            {/* <AccountCircleIcon/> */}<i className="fas fa-user-alt"></i>
            &nbsp;Profile</span>
        </Link>
        <Link className="nav-link text-white" to="/history">
          <span className = " d-flex align-items-center ">
            {/* <HistoryIcon/> */}<i className="fas fa-book-medical"></i>
            &nbsp;History</span>
        </Link>
      </div>
    </div>
  );
};
export default Menubar;
