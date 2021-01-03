import React, { Component } from "react";
import axios from "axios";

const AppointmentCases = (props) => (
  <div>
    <p>{props.cases.patientName}</p>
    <p>{props.cases.complaint}</p>
    <p>{props.cases.phone}</p>
    <p>{props.cases.time}</p>
    <p>{props.cases.date}</p>
  </div>
);

export default class profilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/appointments/")
      .then((response) => {
        this.setState({ cases: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  casesList() {
    return this.state.cases.map((currentcases) => {
      console.log(currentcases._id);
      return <AppointmentCases cases={currentcases} key={currentcases._id} />;
    });
  }
  render() {
    return (
      <div className="card">
        <p>patientName</p>
        <p>complaint</p>
        <p>phone</p>
        <p>day</p>
        <p>time</p>
        <p>date</p>
        <div>
          <tbody>{this.casesList()}</tbody>
        </div>
      </div>
    );
  }
}
