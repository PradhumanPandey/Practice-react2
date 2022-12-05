import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="Back">
      <h1 className="head">Dashboard</h1>
      <ul className="ListStyle">
      <li>
      <Link to="/"><span> Dashboard</span></Link>
      </li>
      <li>
      <Link to="/Calendar123"><span>Calendar</span></Link>
      </li>
      <li>
      <Link to="/ListMeet"><span>ListMeet</span></Link>
      </li>
      </ul>
    </div>
  );
};

export default Dashboard;
