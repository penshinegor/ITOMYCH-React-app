import React, { Fragment } from "react";
import MessageTable from "./Components/MessageTable";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  
  const { email } = useSelector((state => state.loginEmailReducer))

  return (
    <Fragment>
      <header>
        <p className="text-center">{email}</p>
        <Link to="/" className="d-block mx-auto w-25 btn btn-lg btn-primary">
          Logout
        </Link>
      </header>
      <MessageTable />
    </Fragment>
  );
};

export default Dashboard;
