import React from "react";

const DeleteButon = ({ id, onDelete }) => {
  return <button onClick={() => onDelete(id)}>Delete</button>;
};

export default DeleteButon;
