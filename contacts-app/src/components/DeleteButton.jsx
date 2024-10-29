import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button onClick={() => onDelete(id)} className="contact-item__delete">
      X
    </button>
  );
};

export default DeleteButton;
