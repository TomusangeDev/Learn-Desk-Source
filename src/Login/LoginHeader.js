import logo from '../assets/image/badge.png';
import "../ComponentsCss/Header.css";
function SubHeader({onLogout}) {
    return (
        <header className="header px-4 py-3" style={{boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)", paddingLeft: "20px", paddingRight:"20px"}}>
            <div className="left">
                {/* <div className="mobile-toggle"><i className="fas fa-bars"></i></div> */}
                <img src={logo} alt="school logo" className="logo"/>
                <h1 className="school-name">LearnDesk - Primary School Management System</h1>
            </div>
            <div className="right">
                <button onClick={onLogout} className="logout fs-5 fw-semibold">Back to Home</button>
            </div>
        </header>
    );
}
export default SubHeader;