import React, {Fragment} from "react";
import MessageTable from './Components/MessageTable';

class Posts extends React.Component {
    render() {
        return (
            <Fragment>
                <MessageTable />
            </Fragment>
        )
    }
}

export default Posts;