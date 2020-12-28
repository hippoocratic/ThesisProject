import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Input = props => (
  <tr>
    <td>{props.input.overview}</td>
    <td>{props.input.conferences}</td>
    <td>{props.input.insurance_companies}</td>
    <td>{props.input.phone}</td>
    <td>{props.input.location}</td>
    <td>
    <Link className="btn btn-warning" to={"/edit/"+props.input._id}>edit</Link>
    </td>
  </tr>
)

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = { inputs: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/infos/")
      .then((response) => {
        this.setState({ inputs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  inputList() {
    return this.state.inputs.map((currentinput) => {
      console.log(currentinput._id);
      return <Input input={currentinput} key={currentinput._id} />;
    });
  }
  handleClick() {
    window.location = "/profile";
  }

  render() {
    return (
      <div>
        <h3>Profile page </h3>
        <button onClick={this.handleClick.bind(this)}>ADD </button>
       
        <table className="table">
          <tr>
            <th>Overview</th>
            <th>Conferences</th>
            <th>insurance_companies</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
          <tbody>{this.inputList()}</tbody>
        </table>
      </div>
    );
  }
}
