import React, { Component } from "react";
import axios from "axios";


const InfoInput = props => (
  <tr>
    <td>{props.input.name}</td>
    <td>{props.input.overview}</td>
    <td>{props.input.conferences}</td>
    <td>{props.input.insurance_companies}</td>
    <td>{props.input.phone}</td>
    <td>{props.input.location}</td>
  </tr>
);

export default class doctors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [],
      filteredInputs: [],
      SearchString:''  ,
      }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/infos/")
      .then((response) => {
        this.setState({ inputs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  inputsList() {
      let listedInputs = (this.state.filteredInputs.length > 0)? this.state.filteredInputs : this.state.inputs; 
    return listedInputs.map(currentInput => {
      
      return <InfoInput input={currentInput} key={currentInput._id} />;
    });
  }

  onSearch = e => {
    let { inputs } = this.state
    let string = e.target.value
    if(string.length > 0){
       let filteredInputs = inputs.filter(input => input.overview.includes(string))
       this.setState({SearchString:string,filteredInputs:filteredInputs})
    }
    else this.setState({SearchString:string,filteredInputs:[]})
}

  render() {
    return (
      <div className = "container text-center border border-light p-9">
        <h3>doctors page </h3>
        <input name="search" className="form-control" onChange={e => this.onSearch(e)} value={this.state.SearchString}  placeholder="Type Here ... "/>
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
