import '../ComponentsCss/Sidebar.css';
function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">Menu</h2><hr/>
            <ul className="menu">
                <li><i className="fas fa-tachometer-alt"></i> Dashboard</li>
                <li><i className="fas fa-user-graduate"></i> Students</li>
                <li><i className="fas fa-chalkboard-teacher"></i> Staff</li>
                <li><i className="fas fa-school"></i> Classes</li>
                <li><i className="fas fa-book"></i> Subjects</li>
                <li><i className="fas fa-clipboard-check"></i> Attendance</li>
                <li><i className="fas fa-history"></i> Payment History</li>
                <li><i className="fas fa-file-alt"></i> Exams</li>
                <li><i className="fas fa-award"></i> Results</li>
                <li><i className="fas fa-money-bill-wave"></i> Fees</li>
                <li><i className="fas fa-chart-line"></i> Reports</li>
                <li><i className="fas fa-envelope"></i> Messages</li>
                <li><i className="fas fa-user-shield"></i> Users & Roles</li>
                <li><i className="fas fa-cogs"></i> Settings</li>
                <li><i className="fas fa-sign-out-alt"></i> Logout</li>
            </ul>
        </aside>
    );
}
export default Sidebar;