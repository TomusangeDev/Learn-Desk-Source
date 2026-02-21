import logo from '../assets/image/badge.png';
import passport from '../assets/image/passport.jpeg';
import "../ComponentsCss/Header.css";
function SubHeader({onLogout, onToggle, isOpen}) {
    return (
        <header className="header py-3 px-4" style={{boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)"}}>
            <div className="left">
                <div onClick={onToggle} className="mobile-toggle"><i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i></div>
                <img src={logo} alt="school logo" className="logo"/>
                <h1 className="school-name">LearnDesk - Primary School Management System</h1>
            </div>
            <div className="right">
                <span className="welcome fs-5">Welcome!</span>
                <img src={passport} alt="admin passport" className="passport bg-dark mx-2 border-rounded"/>
                <div style={{position: "relative"}} className="me-4">
                    <i className="fa-solid fa-bell fa-2x"></i>
                    <span style={{position: "absolute"}} className="top-0 start-100 translate-middle badge rounded-pill bg-danger">300</span>
                </div>
                <button onClick={onLogout} className="logout fs-5 fw-semibold">Logout</button>
            </div>
        </header>
    );
}
export default SubHeader;