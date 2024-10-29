import React from "react";
import "./../style/NotesList.css";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { getInitialData, showFormattedDate } from "../utils/index.js";

const NotesItem = ({
  id,
  title,
  createdAt,
  body,
  funch,
  onArchive,
  onDelete,
}) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <q>{showFormattedDate(createdAt)}</q>
      <p>{body}</p>
      <div className="button">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} funch={funch} />
      </div>
    </div>
  );
};

export default NotesItem;
