import React from "react";

class Messages extends React.Component {

    render() {
        return(
            <table className="table caption-top">
                <caption>List of messages</caption>
                <thead className="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map(item => (
                        <tr>
                            <th scope="row" key={item.id}>
                                {item.id}
                            </th>
                            <td key={item.title}>
                                {item.title}
                            </td>
                            <td key={item.body}>
                                {item.body}
                            </td>
                        </tr>  
                    ))}
                </tbody>
            </table>
        );      
    }
}

export default Messages;