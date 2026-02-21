import React from 'react';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login/LoginForm';
import Admin from './Pages/Admin';
import Teacher from './Pages/Teacher';
import Student from './Pages/Student';
import Bursar from './Pages/Bursar';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';

function App() {
  // mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  // page navigation
  const navigate = useNavigate();
  const handleLogin = () => {
    // show admin for now
    // navigate('/Admin');
    navigate('/Login');
  }

  // share functionality
  const handleShare = async () => {
    const url = "https://tomusangedev.github.io/Learn-Desk/?#/";

    try {
      if (navigator.share){
        await navigator.share({
        title: "LearnDesk",
        text: "Check out this powerful school management system",
        url: url
      });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  } catch (error) {
    console.log("Sharing failed", error);
  }
  };

  return (
    <Routes>
      {/* Guest / Homepage */}
      <Route
        path="/"
        element={
        <div>
          <Header 
           onLogin={handleLogin}
           isOpen={isOpen}
           onToggle={toggleSidebar} 
          />
          <div style={{display: "flex"}}>
          <Sidebar 
            onLogin={handleLogin}
            isOpen={isOpen}
            share={handleShare}
          />

        <main className="main-content bg-light" style={{height: "100vh", position: "fixed", left: "300px", right: "0", overflowY: "auto"}}>
          <div className="home-pg" style={{zIndex: "1000"}}>
            <div className="bg-dark px-4 py-1" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div><h2 className="welcome-message text-light" style={{fontSize:"18px"}}>Welcome!</h2></div>
              <div className="clock-date text-light fw-semibold" style={{fontSize:"18px"}}><Clock/></div>
            </div>
          </div>

          
          <div className="container my-4" style={{paddingTop: "130px"}}>

            {/* Social icons */}
            <div className='py-2 social-icon-contacts'>
              <ul className='list-unstyled d-flex flex-wrap justify-content-center gap-4'>
                <li>
                  <a href='##' className='text-decoration-none fs-1 text-primary'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='##' className='text-decoration-none fs-1 text-dark'>
                    <i className='fab fa-tiktok'></i>
                  </a>
                </li>
                <li>
                  <a href='##' className='text-decoration-none fs-1 text-dark'>
                    <i className='fab fa-x-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='##' className='text-decoration-none fs-1 text-danger'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='https://wa.me/256763561388?text=Hello1%20I%20am%20interested%20in%20your%20services.%20And%20I%20would%20like%20to%20ask%20about%20*LearnDesk*%20school%20management%20system.' target='_blank' rel='noopener noreferrer' className='text-decoration-none fs-1 text-success'>
                    <i className='fab fa-whatsapp'></i>
                  </a>
                </li>
                <li>
                  <a href='mailto:tomusangedev@gmail.com?subject=Inquiry%20About%20LearnDesk&body=Hello,%20I%20like%20your%20services%20and%20I%20would%20like%20to%20ask%20about%20LearnDesk%20school%20management%20system.' target='_blank' rel='noopener noreferrer' className='text-decoration-none fs-1 text-danger'>
                    <i className='fas fa-envelope'></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick access */}
          <div className="container admin-d-board">
            <h5 className="pb-3">Academic Year: 2026</h5>
            <div className="row g-3">
              <div className="col-6 col-md-3">
                <div onClick={handleLogin} className="stat-box guest-button">
                  <i className="fa-solid fa-user-lock stat-icon"></i>
                  <h6>LOGIN</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box guest-button">
                  <i className="fa-solid fa-file-signature stat-icon"></i>
                  <h6>ADMISSION</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <a href='tel:+256763561388' className='text-decoration-none text-dark'>
                  <div className="stat-box guest-button">
                    <i className="fa-solid fa-phone stat-icon"></i>
                    <h6>CALL US NOW</h6>
                  </div>
                </a>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box guest-button">
                  <i className="fa-solid fa-file-invoice-dollar stat-icon"></i>
                  <h6>FEES STRUCTURE</h6>
                </div>
              </div>
            </div>

            <div className="row g-3 py-4">
              <div className="col-6 col-md-3">
                <div className="stat-box guest-button">
                  <i className="fa-solid fa-rocket stat-icon"></i>
                  <h6>MISSION</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box guest-button">
                  <i className="fa-solid fa-eye stat-icon"></i>
                  <h6>VISION</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box guest-button">
                  <i className="fa-solid fa-calendar-check stat-icon"></i>
                  <h6>EVENTS</h6>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div onClick={handleShare} className="stat-box guest-button">
                  <i className="fa-solid fa-share-nodes stat-icon"></i>
                  <h6>SHARE</h6>
                </div>
              </div>
            </div>

          </div>

            {/* Events over view */}
            <h3 className="mb-3 mt-5">Events Overview</h3>
            <div className="row g-3">

              <div className="col-12 col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">Science Fair</h6>
                    <p className="card-text mb-1"><i className="fa-solid fa-calendar-days"></i> 20 Feb 2026</p>
                    <p className="card-text"><i className="fa-solid fa-location-dot"></i> School Hall</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">Sports Day</h6>
                    <p className="card-text mb-1"><i className="fa-solid fa-calendar-days"></i> 28 Feb 2026</p>
                    <p className="card-text"><i className="fa-solid fa-location-dot"></i> Playground</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">Parent-Teacher Meeting</h6>
                    <p className="card-text mb-1"><i className="fa-solid fa-calendar-days"></i> 5 Mar 2026</p>
                    <p className="card-text"><i className="fa-solid fa-location-dot"></i> Conference Room</p>
                  </div>
                </div>
              </div>

            </div>



          </div>
        </main>
      </div>
    </div>
        }
      />

      {/* Other pages */}
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/teacher" element={<Teacher/>} />
      <Route path="/student" element={<Student/>} />
      <Route path="/bursar" element={<Bursar/>} />
    </Routes>
  );
}

export default App;
