import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {

    return (
        <>
            <nav className={`navbar sticky-top navbar-expand-lg navbar-dark bg-dark`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">TextUtils</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pricing">Pricing</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="form-check form-switch">
                                <input checked={props.theme.bg === "dark" ? true : false} onChange={props.toggleTheme} className="form-check-input" type="checkbox" role="switch" id="theme-switch" />
                                <label className="form-check-label text-light" htmlFor="theme-switch">Enable Dark Mode</label>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
