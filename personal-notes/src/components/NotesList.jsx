import { React, useState } from "react";
import NotesItem from "./NotesItem";
import "./../style/NotesList.css";

const NotesList = ({ notes, onDelete, onArchive }) => {
  const isActive = (value) => {
    return notes.filter((note) => (note.archived === value ? false : true));
  };

  return (
    <div className="container">
      <h1 className="title">Catatan Aktif</h1>
      <div className="list-notes">
        {isActive(true).length > 0 ? (
          isActive(true).map((note) => {
            return (
              <NotesItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
                funch={"Archive"}
              />
            );
          })
        ) : (
          <p>Tidak ada catatan aktif</p>
        )}
      </div>

      <br />
      <h1 className="title">Catatan Archive</h1>
      <div className="list-notes">
        {isActive(false).length > 0 ? (
          isActive(false).map((note) => {
            return (
              <NotesItem
                key={note.id}
                {...note}
                onDelete={onDelete}
                onArchive={onArchive}
                funch={"Unarchive"}
              />
            );
          })
        ) : (
          <p>Tidak ada catatan archive</p>
        )}
      </div>
    </div>
  );
};

export default NotesList;
