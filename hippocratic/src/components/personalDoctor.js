import React, { Component }  from 'react';
import axios from "axios";

const InfoInput = props => (
    <th>
      <tr>{props.input.name}</tr>
      <tr>{props.input.phone}</tr>
      <tr>{props.input.location}</tr>
    </th>
  );
  
  export default class personalDoctor extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            name:"",
            overview: "",
            conferences: "",
            insurance_companies: "",
            phone: "",
            location: "",
            userId:localStorage.getItem('id'),
            inputs:{}
          }
    }
    componentDidMount() {
        axios
          .get("http://localhost:3000/infos/"+this.state.userId)
          .then((response) => {console.log(response)
            this.setState({ inputs: response.data });console.log(this.state.inputs)
          })
          .catch((error) => {
            console.log(error);
          });
      }
   
  
      render() {
        // if(localStorage.getItem("auth-token") !== null && ("userType") === ("undefined")) {
        return (
            <div>
           
             
              <div class="card" style={{width:"1000px", height:"1000px"}}>
               
               <div className="card"> 
               
                    <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.name}</h2>
                    <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.overview}</h2>
                     <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.conferences}</h2>
                     <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.insurance_companies}</h2>
                     <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.phone}</h2>
                     <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.location}</h2>
                     <h2 style={{fontFamily:'Arima Madurai'}}>{this.state.inputs.working_hour}</h2>


                    
                 
                  {/* <tbody>{this.inputsList()}</tbody> */}
               </div>
             </div>
              </div>
            );
          } 
        
  }
        