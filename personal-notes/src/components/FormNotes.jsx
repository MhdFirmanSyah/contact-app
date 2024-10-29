import React from "react";
import "./../style/AddNotes.css";

class FormNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitChar: 50,
      inputValue: "",
      bodyPlaceholder: "Isi Catatan...",
      titlePlaceholder: "Judul...",
      title: "",
      body: "",
    };
    this.addTitleAndLimitChar = this.addTitleAndLimitChar.bind(this);
    this.addBody = this.addBody.bind(this);
    this.submitAddNote = this.submitAddNote.bind(this);
    this.alertEmpty = this.alertEmpty.bind(this);
  }

  addTitleAndLimitChar(event) {
    const inputValue = event.target.value;

    this.setState({ inputValue: inputValue });

    this.setState((prevState) => ({
      limitChar: 50 - inputValue.length,
    }));

    if (inputValue.length > 50) {
      this.setState({ title: inputValue.substring(0, 50) });
      alert("Limit karakter hanya 50");
    } else {
      this.setState({ title: inputValue });
    }
  }

  addBody(event) {
    this.setState((prevState) => ({ body: event.target.value }));
  }

  resetState() {
    this.setState({
      title: "",
      body: "",
    });
  }

  alertEmpty() {
    if (this.state.body === "" && this.state.title === "") {
      alert("Isi judul dan catatan tidak boleh kosong!!");
    } else {
      if (this.state.body === "") {
        alert("Isi catatan tidak boleh kosong!!");
      }
      if (this.state.title === "") {
        alert("Isi judul tidak boleh kosong!!");
      }
    }
  }

  submitAddNote(event) {
    event.preventDefault();
    if (this.state.body === "" || this.state.title === "") {
      this.alertEmpty();
    } else {
      this.props.addNote(this.state);
      this.props.close();
      this.resetState();
    }
  }

  render() {
    if (this.props.isOpen === false) {
      return null;
    }
    return (
      <>
        <div className="bg-form" onClick={this.props.close}></div>

        <div className="container-form">
          <img
            className="close"
            src="/public/image/close.png"
            alt=""
            onClick={this.props.close}
          />

          <h1>Buat Catatan</h1>

          <form action="" onSubmit={this.submitAddNote}>
            <label htmlFor="title">Sisa Karakter: {this.state.limitChar}</label>

            <input
              style={this.state.limitChar <= 5 ? { outlineColor: "red" } : {}}
              value={this.state.title}
              onChange={this.addTitleAndLimitChar}
              type="text"
              id="title"
              className="title-note"
              placeholder={this.state.titlePlaceholder}
            />
            <textarea
              onChange={this.addBody}
              placeholder={this.state.bodyPlaceholder}
              name=""
              id=""
              className="body-note"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit">Add Note</button>
          </form>
        </div>
      </>
    );
  }
}

export default FormNotes;
