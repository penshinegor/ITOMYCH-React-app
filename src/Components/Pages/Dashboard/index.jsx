import React, {Fragment} from "react";
import MessageTable from './Components/MessageTable';

class Dashboard extends React.Component {
    render() {
        return (
            <Fragment>
                <MessageTable />
            </Fragment>
        )
    }
}

export default Dashboard;