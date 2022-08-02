import React, {Fragment} from "react";
import MessageTable from './Components/MessageTable';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
    render() {
        return (
            <Fragment>
                <header>
                    <Link to="/" className="d-block mx-auto w-25 btn btn-lg btn-primary">Logout</Link>
                </header>
                <MessageTable />
            </Fragment>
        )
    }
}

export default Dashboard;