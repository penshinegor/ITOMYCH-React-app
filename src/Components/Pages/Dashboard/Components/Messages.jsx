import React, { Fragment, useState } from "react";
import EditableTable from "./EditableTable";
import ReadOnlyTable from "./ReadOnlyTable";
import "./styles.scss";

const Messages = (props) => {

  const [items, setItems] = useState(props.items);
  const [editItemId, setEditItemId] = useState(null);
  const [editTableInfo, setEditTableInfo] = useState({
    body: "",
    title: "",
  });

  const handleEditTableChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newTableData = { ...editTableInfo };
    newTableData[fieldName] = fieldValue;
    setEditTableInfo(newTableData);
  };

  const handleEditTableSubmit = (event) => {
    event.preventDefault();
    const editedTable = {
      body: editTableInfo.body,
      title: editTableInfo.title,
      id: editItemId,
    };
    const newItems = [...items];
    const index = items.findIndex((item) => item.id === editItemId);
    newItems[index] = editedTable;
    setItems(newItems);
    setEditItemId(null);
  };

  const handleDeleteClick = (itemId) => {
    const newItems = [...items];
    const index = items.findIndex((item) => item.id === itemId);
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditItemId(item.id);
    const tableValues = {
      body: item.body,
      title: item.title,
    };
    setEditTableInfo(tableValues);
  };

  const handleCancelClick = () => {
    setEditItemId(null);
  };

  return (
    <form onSubmit={handleEditTableSubmit}>
      <table className="table caption-top">
        <caption>List of messages</caption>
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <Fragment>
              {editItemId === item.id ? (
                <EditableTable
                  item={item}
                  editTableInfo={editTableInfo}
                  handleEditFormChange={handleEditTableChange}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyTable
                  item={item}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Messages;
