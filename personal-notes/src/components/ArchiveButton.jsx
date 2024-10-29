import React from "react";

const ArchiveButton = ({ id, onArchive, funch }) => {
  return <button onClick={() => onArchive(id)}>{funch}</button>;
};

export default ArchiveButton;
