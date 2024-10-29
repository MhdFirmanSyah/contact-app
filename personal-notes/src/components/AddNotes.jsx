import React from "react";
import "./../style/AddNotes.css";
import FormNotes from "./FormNotes";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    document.body.style.overflow = this.state.isOpen ? "auto" : "hidden";
  }

  render() {
    return (
      <>
        <div className="cover-added" onClick={this.handleClick}>
          <div className="button-added">
            <span className="obj1" />
            <span className="obj2" />
          </div>
        </div>
        <FormNotes
          addNote={this.props.addNote}
          close={this.handleClick}
          isOpen={this.state.isOpen}
        />
      </>
    );
  }
}

export default AddNotes;
