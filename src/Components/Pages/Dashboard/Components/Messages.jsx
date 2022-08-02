import React from "react";
import { Link } from "react-router-dom";
import './styles.scss';

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

                            <td>
                                <Link className="userLink text-dark" key={item.id} to={`/dashboard/${item.id}`}>
                                    <td key={item.title}>
                                        {item.title}
                                    </td>
                                </Link>
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