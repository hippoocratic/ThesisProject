import React, { Component } from "react";
import axios from "axios";

const AppointmentCases = (props) => (
  <th>
    <tr>{props.cases.patientName}</tr>
    <tr>{props.cases.complaint}</tr>
    <tr>{props.cases.phone}</tr>
    <tr>{props.cases.date}</tr>
  </th>
);

export default class profilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      userId:localStorage.getItem('id'),
    };
  }
  componentDidMount() {
    
console.log(this.state.userId)
    axios
      .get("http://localhost:3000/appointments/"+this.state.userId)
      .then((response) => {
        this.setState({ cases: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // casesList() {
  //   return this.state.cases.map((currentcases) => {
  //     console.log(currentcases._id);
  //     return <AppointmentCases cases={currentcases} key={currentcases._id} />;
  //   });
  // }
  render() {
    return (
      <div>
        
        <h1>{this.state.cases.patientName}</h1>
        <h2>{this.state.cases.complaint}</h2>
        <h3>{this.state.cases.phone}</h3>
        <h3>{this.state.cases.date}</h3>
    
        <div>
          {/* <tbody>{this.casesList()}</tbody> */}
        </div>
      </div>
    );
  }
}
