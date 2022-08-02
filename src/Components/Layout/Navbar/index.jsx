import React from "react";
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
                </div>
            </nav>
        )
    }
}

export default Navbar;