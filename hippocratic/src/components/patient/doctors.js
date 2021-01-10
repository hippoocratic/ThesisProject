import React, { Component } from "react";
import axios from "axios";


const InfoInput = props => (
 
  <div class="card" style={{fontFamily:"Arima Madurai"}} >
       <ul class="list-group list-group-flush">
    <h4 class="list-group-item-bold" style={{fontFamily:"Arima Madurai"}}>{props.input.name}</h4>
    <li class="list-group-item" style={{fontFamily:"Arima Madurai"}}>{props.input.phone}</li>
    <li class="list-group-item" style={{fontFamily:"Arima Madurai"}}>{props.input.location}</li>
    </ul></div>
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
    <div></div>
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
        <div className="card">
         
          <div className="card-body">
          
           
            <h5 className="card-text" >{this.inputsList()}</h5>
           
            {/* <p className="card-text">{this.inputsList()}</p> */}
            {/* <tbody className="card-text">{this.inputsList()}</tbody> */}

        
         </div>
         </div>
      
        
        
          {/* <tbody>{this.inputsList()}</tbody> */}
     
      </div>
    );
  }
}