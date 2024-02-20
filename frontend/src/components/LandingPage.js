import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="container">
      <h1>Welcome to University Management System</h1>
      <img src='https://imgs.search.brave.com/zvLUZy9kb-UCLvuedisnFvm3cEEFT3ObwRMTMCSFaq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk2L1dDRV9TYW5n/bGlfQ2FtcHVzLmpw/Zw'></img>
      <div className="nav-links">
        <Link to="/admin-login"><button>Admin</button></Link>
        <Link to="/teacher-login"><button>Instructor</button></Link>
        <Link to="/student-login"><button>Student</button></Link>
      </div>
    </div>
  );
}

export default LandingPage;
