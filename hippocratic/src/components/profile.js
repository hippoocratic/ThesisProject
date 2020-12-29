import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const InfoInput = props => (
  <tr>
    <td>{props.input.inputName}</td>
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
  inputsList() {
    return this.state.inputs.map((currentinput) => {
      console.log(currentinput._id);
      return <InfoInput input={currentinput} key={currentinput._id} />;
    });
  }


  render() {
    return (
      <div>
        <h3>Profile page </h3>
      
       
        <table className="table">
          <tr>
          <th>Name</th>
            <th>Overview</th>
            <th>Conferences</th>
            <th>insurance_companies</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
          <tbody>{this.inputsList()}</tbody>
        </table>
      </div>
    );
  }
}
