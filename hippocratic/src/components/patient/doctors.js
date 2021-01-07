import React, { Component } from "react";
import axios from "axios";


const InfoInput = props => (
  <th>
    <tr>{props.input.name}</tr>
    <tr>{props.input.phone}</tr>
    <tr>{props.input.location}</tr>
  </th>
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
      .get("http://localhost:3000/infos/")
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
      <div>
    <h3>doctors page </h3>
     <input name="search" className="form-control" onChange={e => this.onSearch(e)} value={this.state.SearchString}  placeholder="Type Here ... "/>
      <div class="card" style={{width:"1000px", height:"1000px"}}>
        
       
        {/* {/* <table className="table">  */}
          {/* <th>
            <tr>Name</tr>
            <tr>Overview</tr>
            <tr>Conferences</tr>
            <tr>insurance_companies</tr> 
            <tr>Phone</tr>
            <tr>Location</tr>
          </th>  */}
          <tbody>{this.inputsList()}</tbody>
       
      </div>
      </div>
    );
  }
}
