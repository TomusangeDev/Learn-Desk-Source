import '../ComponentsCss/Sidebar.css';
function Sidebar({onLogin, isOpen, share}) {
    return (
        <aside  className={isOpen ? "sidebar active": "sidebar"}>
            <h2 className="sidebar-title fs-3 fw-semibold">Menu</h2><hr/>
            <ul className="menu mb-5">
                <li className="fs-5 fw-semibold"><i className="fas fa-house"></i> Home</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-circle-info"></i> About Us</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-location-dot"></i> Location</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-calendar-check"></i> Events</li>
                <li onClick={share} className="fs-5 fw-semibold"><i className="fas fa-share-nodes"></i> Share</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-shield-halved"></i> Privacy Policy</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-file-contract"></i> Terms & Conditions</li>
                <li onClick={onLogin} className="fs-5 fw-semibold"><i className="fas fa-user-lock"></i> Login</li>
            </ul>
        </aside>
    );
}
export default Sidebar;