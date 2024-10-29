import React from "react";
import NavBar from "./NavBar";
import NotesList from "./NotesList";
import AddNotes from "./AddNotes";
import { getInitialData, showFormattedDate } from "../utils/index.js";

class AppNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: "", // Tambahkan state untuk query pencarian
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.addNote = this.addNote.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this); // Fungsi untuk menangani perubahan pencarian
  }

  onDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchive(id) {
    const notes = [...this.state.notes];
    const index = notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      notes[index].archived = !notes[index].archived;
      this.setState({ notes });
      console.log(notes);
    }
  }

  addNote(data) {
    console.log(data);
    this.state.notes.push({
      id: new Date().toISOString(), // Gunakan .toISOString() untuk id
      title: data.title,
      body: data.body,
      createdAt: new Date().toISOString(),
      archived: false,
    });
    this.setState({ notes: this.state.notes });
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    // Filter notes berdasarkan query pencarian
    const filteredNotes = this.state.notes.filter((note) => {
      const titleLower = note.title.toLowerCase();
      const bodyLower = note.body.toLowerCase();
      const queryLower = this.state.searchQuery.toLowerCase();
      return titleLower.includes(queryLower) || bodyLower.includes(queryLower);
    });

    return (
      <>
        <NavBar search={this.handleSearchChange} />
        <NotesList
          notes={filteredNotes} // Gunakan notes yang sudah di-filter
          onDelete={this.onDelete}
          onArchive={this.onArchive}
        />
        <AddNotes addNote={this.addNote} />
      </>
    );
  }
}

export default AppNotes;
