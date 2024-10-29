import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "Male",
    };

    // Suggested code may be subject to a license. Learn more: ~LicenseLog:2132155807.
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.genderChangeHandler = this.genderChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  nameChangeHandler(event) {
    this.setState(() => {
      return { name: event.target.value };
    });
  }
  emailChangeHandler(event) {
    this.setState(() => {
      return { email: event.target.value };
    });
  }
  genderChangeHandler(event) {
    this.setState(() => {
      return { gender: event.target.value };
    });
  }

  submitHandler(event) {
    event.preventDefault();

    const massage = `
     Name: ${this.state.name}
     Email: ${this.state.email} 
     Gender: ${this.state.gender}
    `;
    alert(massage);
  }

  render() {
    return (
      <div className="my-form">
        <h1>Register Form</h1>

        <form action="" onSubmit={this.submitHandler}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.nameChangeHandler}
          />

          <label htmlFor="email">Email: </label>
          <input
            type="Email"
            id="email"
            value={this.state.email}
            onChange={this.emailChangeHandler}
          />

          <label htmlFor="gender">Gender: </label>
          <select
            name=""
            id="gender"
            value={this.state.gender}
            onChange={this.genderChangeHandler}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
