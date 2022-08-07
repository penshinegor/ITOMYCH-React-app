import React from "react";
import { Link } from "react-router-dom";

const EditableTable = ({
  item,
  editTableInfo,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <th scope="row" key={item.id}>
        {item.id}
      </th>

      <td>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            required="required"
            placeholder="Enter a title..."
            name="title"
            onChange={handleEditFormChange}
            value={editTableInfo.title}
          />
        </div>
      </td>

      <td>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            required="required"
            placeholder="Enter a body..."
            name="body"
            onChange={handleEditFormChange}
            value={editTableInfo.body}
          />
        </div>
      </td>

      <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-success btn-sm">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditableTable;
