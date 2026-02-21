import '../ComponentsCss/Sidebar.css';
function Sidebar({onLogout, isOpen}) {
    return (
        <aside  className={isOpen ? "sidebar active": "sidebar"}>
            <h2 className="sidebar-title fs-3 fw-semibold">Menu</h2><hr/>
            <ul className="menu mb-5">
                <li className="fs-5 fw-semibold"><i className="fas fa-tachometer-alt"></i> Dashboard</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-user-graduate"></i> Students</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-chalkboard-teacher"></i> Staff</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-school"></i> Classes</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-book"></i> Subjects</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-clipboard-check"></i> Attendance</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-history"></i> Payment History</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-file-alt"></i> Exams</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-award"></i> Results</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-money-bill-wave"></i> Fees</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-chart-line"></i> Reports</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-envelope"></i> Messages</li>
                <li className="fs-5 fw-semibold"><i className="fas fa-user-shield"></i> Users & Roles</li>
                <li onClick={onLogout} className="fs-5 fw-semibold"><i className="fas fa-sign-out-alt"></i> Logout</li>
            </ul>
        </aside>
    );
}
export default Sidebar;