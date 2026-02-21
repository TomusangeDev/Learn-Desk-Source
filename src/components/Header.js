import logo from '../assets/image/badge.png';
import "../ComponentsCss/Header.css";
function Header({onLogin, onToggle, isOpen}) {
    return (
        <header className="header py-3 px-4" style={{boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)"}}>
            <div className="left">
                <div onClick={onToggle} className="mobile-toggle"><i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i></div>
                <img src={logo} alt="school logo" className="logo"/>
                <h1 className="school-name">LearnDesk - Primary School Management System</h1>
            </div>
            <div className="right">
                <button onClick={onLogin} className="logout fs-5 fw-semibold">Login</button>
            </div>
        </header>
    );
}
export default Header;