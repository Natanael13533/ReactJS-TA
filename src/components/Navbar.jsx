import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/api">API</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contextapi">ContextAPI</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/redux">Redux</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;