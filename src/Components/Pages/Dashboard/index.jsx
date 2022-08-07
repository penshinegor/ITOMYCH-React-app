import React, { Fragment, useContext } from "react";
import MessageTable from "./Components/MessageTable";
import { Link } from "react-router-dom";
import EmailContext from "../../Context";

const Dashboard = () => {
  const [emailInfo, setEmailInfo] = useContext(EmailContext);

  return (
    <Fragment>
      <header>
        <p className="text-center">{emailInfo}</p>
        <Link to="/" className="d-block mx-auto w-25 btn btn-lg btn-primary">
          Logout
        </Link>
      </header>
      <MessageTable />
    </Fragment>
  );
};

export default Dashboard;
