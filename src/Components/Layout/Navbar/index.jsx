import React from "react";
import {NavLink} from "react-router-dom";
import mops from "../../Images/logo.svg"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <img src={mops} alt="" width="30" height="28" className="d-inline-block align-text-top"/>
                        React App
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link" 
                                    to="/"
                                    exact="true"
                                >
                                    Главная
                                </NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/posts"
                            >
                                Сообщения
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;