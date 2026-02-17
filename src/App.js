import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Clock from './components/Clock';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div style={{display: "flex"}}>
      <Sidebar/>
        <main className="main-content bg-light" style={{height: "100vh", position: "fixed", left: "210px", right: "0", overflowY: "auto"}}>
          <div className="home-pg" style={{zIndex: "1000"}}>
            <div className="bg-dark px-2" style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
              <div><h2 className="welcome-message text-white">Admin/Dashboard</h2></div>
              <div className="clock-date text-white fw-bold"><Clock/></div>
            </div>
          </div>
          <div className="container my-4" style={{paddingTop: "65px"}}>
            <h5 className="py-3">Academic Year: 2026</h5>
            <div className="row g-3">
              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-user-graduate stat-icon"></i>
                  <h6>Total Students</h6>
                  <h3>340</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-mars stat-icon"></i>
                  <h6>Male Students</h6>
                  <h3>176</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-venus stat-icon"></i>
                  <h6>Female Students</h6>
                  <h3>164</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-chalkboard-user stat-icon"></i>
                  <h6>Total Teachers</h6>
                  <h3>26</h3>
                </div>
              </div>
            </div>

            <div className="row g-3 py-4">
              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-chalkboard-user stat-icon"></i>
                  <h6>Male Teachers</h6>
                  <h3>18</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-chalkboard-user stat-icon"></i>
                  <h6>Female Teachers</h6>
                  <h3>8</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-check-circle stat-icon text-success"></i>
                  <h6>Students Present Today</h6>
                  <h3>326</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-circle-xmark stat-icon text-danger"></i>
                  <h6>Students Absent Today</h6>
                  <h3>14</h3>
                </div>
              </div>
            </div>

            <div className="row g-3 py-4">
              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-user-graduate stat-icon"></i>
                  <h6>Students Joined this Year</h6>
                  <h3>76</h3>
                </div>
              </div>

              <div className="col-6 col-md-3">
                <div className="stat-box">
                  <i className="fa-solid fa-chalkboard-user stat-icon"></i>
                  <h6>Teachers Joined this Year</h6>
                  <h3>2</h3>
                </div>
              </div>
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

          <div className="pb-5 mb-5"></div>

          <Footer/>
          
          <div className="pb-5 mb-5"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
