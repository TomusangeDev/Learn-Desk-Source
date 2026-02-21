import '../ComponentsCss/Sidebar.css';
function Sidebar({onLogout, isOpen}) {
    return (
        <aside  className={isOpen ? "sidebar active": "sidebar"}>
            <h2 className="sidebar-title fs-3 fw-semibold">Menu</h2><hr/>
            <ul className="menu mb-5">
                <li className="fs-5 fw-semibold"><i className="fas fa-tachometer-alt"></i> Dashboard</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-user-graduate"></i> My Profile</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-clipboard-check"></i> My Attendance</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-award"></i> Results</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-user-graduate"></i> My Classmaates</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-money-bill-wave"></i> My Fees Payments</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-envelope"></i> Messages</li>
                <li onClick={onLogout} className="fs-5 fw-semibold"><i className="fas fa-sign-out-alt"></i> Logout</li>
            </ul>
        </aside>
    );
}
export default Sidebar;