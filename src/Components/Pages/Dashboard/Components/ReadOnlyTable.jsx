import React from "react";
import { Link } from "react-router-dom";

const ReadOnlyTable = ({ item, handleDeleteClick, handleEditClick }) => {
  return (
    <tr>
      <th scope="row" key={item.id}>
        {item.id}
      </th>

      <td>
        <Link
          className="userLink text-dark"
          key={item.id}
          to={`/dashboard/${item.id}`}
        >
          <td key={item.title}>{item.title}</td>
        </Link>
      </td>

      <td key={item.body}>{item.body}</td>

      <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={(event) => handleEditClick(event, item)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => handleDeleteClick(item.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyTable;
