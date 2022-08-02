import React from "react";
import Messages from "./Messages";

class MessageTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data.splice(0, 10))
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        if(this.state.error) {
            return <p>Something went wrong...</p>
        } else if(!this.state.isLoaded){
            return <p>Loading...</p>
        } else {
            return (
                <Messages
                    items = {this.state.items}
                />
            );
        }
    }
}

export default MessageTable;