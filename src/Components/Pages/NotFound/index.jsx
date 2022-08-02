import React from "react";
import { Link } from "react-router-dom";
import mops from "../../Images/404.svg"

const NotFound = () => {
    return(
        <div>
            <img src={mops} alt="" className="mx-auto d-block mt-5"/>
            <h1 className="text-center">404 Page not found</h1>
            <p className="text-center">The information you are looking for is not here. Please check the page address or start with the main page</p>
            <Link to="/" className="d-block mx-auto w-25 btn btn-lg btn-primary mt-5">Main page</Link>
        </div>
    )
}

export default NotFound;