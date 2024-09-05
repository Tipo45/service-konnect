import React from "react";
import "bootstrap/js/dist/dropdown";
import { Link } from "react-router-dom";

const Navbar = ({ Toggle }) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
            <i className="navbar-brand bi bi-justify-left col-4 fs-4" onClick={Toggle}></i>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <i className='bi bi-justify white-space'></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tipo</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <Link to="/admin"><a className="dropdown-item">Profile</a></Link>
                            <Link to="/admin"><a className="dropdown-item">Settings</a></Link>
                            <Link to="/admin"><a className="dropdown-item">Logout</a></Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;