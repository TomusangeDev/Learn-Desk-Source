import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';
import SubHeader from '../components/SubHeader';
import SubSidebar from '../components/SidebarTeacher';
import Clock from '../components/Clock';

function Teacher() {
      // mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    }
    // page navigation
      const navigate = useNavigate();
      const handleLogout = () => {
      // Logout back to homepage
      navigate('/');
    }
  return (
    <div>
          <SubHeader
            onLogout={handleLogout}
            isOpen={isOpen}
            onToggle={toggleSidebar}
          />
      <div style={{display: "flex"}}>
      <SubSidebar
        onLogout={handleLogout}
        isOpen={isOpen}
      />
        <main className="main-content bg-light" style={{height: "100vh", position: "fixed", left: "210px", right: "0", overflowY: "auto"}}>
          <div className="home-pg" style={{zIndex: "1000"}}>
            <div className="bg-dark px-4 py-1" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div><h2 className="welcome-message text-light" style={{fontSize:"18px"}}>Teacher/Dashboard</h2></div>
              <div className="clock-date text-light fw-semibold" style={{fontSize:"18px"}}><Clock/></div>
            </div>
          </div>
          <div className="container my-4" style={{paddingTop: "130px"}}>
            <h5 className="py-3">Academic Year: 2026</h5>
            <div className='py-5 my-5'>
              <h1 className='text-center text-danger py-5 my-5'>Teacher info is not available</h1>
            </div>
          </div>

          {/* Events over view */}
          <div className="container my-4">
            <h5 className="mb-3">Events Overview</h5>
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
  );
}

export default Teacher;
