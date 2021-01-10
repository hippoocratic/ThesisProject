import React, { Component} from "react";
import axios from "axios";



export default class CreateInfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeOverview = this.onChangeOverview.bind(this);
    this.onChangeConferences = this.onChangeConferences.bind(this);
    this.onChangeInsurance_companies = this.onChangeInsurance_companies.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeWorking_hour = this.onChangeWorking_hour.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
    this.state = {
      name:"",
      overview: "",
      conferences: "",
      insurance_companies: "",
      phone: "",
      location: "",
      working_hour:"",
      infos: [],
    };
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeOverview(e) {
    this.setState({
      overview: e.target.value,
    });
  }

  onChangeConferences(e) {
    this.setState({
      conferences: e.target.value,
    });
  }

  onChangeInsurance_companies(e) {
    this.setState({
      insurance_companies: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeWorking_hour(e) {
    this.setState({
      working_hour: e.target.value,
    });
  }
  handleClick() {
    window.location = "/personalDoctor";
  }
  onSubmit(e) {
    e.preventDefault();
    const input = {
      name: this.state.name,
      overview: this.state.overview,
      conferences: this.state.conferences,
      insurance_companies: this.state.insurance_companies,
      phone: this.state.phone,
      location: this.state.location,
      working_hour:this.state.working_hour
    };
       
    axios.post('http://localhost:3000/infos/add', input)
    
      .then(res=> console.log(res.data));
    this.setState({
      name:"",
      overview: "",
      conferences: "",
      insurance_companies: "",
      phone: "",
      location: "",
      working_hour:""
    });
  
  }
  // const ReactFirebaseFileUpload = () => {
  //   const [image, setImage ]=useState (null);

  //   const handleChange = e =>{
  //     if(e.target.files[0]){

  //     }
  //   };
  //   const handleUpoad = () => {};
  // }

 

  render() {
   console.log(localStorage.getItem("auth-token"))
    console.log(localStorage.getItem("userType"))
     return (
       
         <div>
            {localStorage.getItem("auth-token") !== null && localStorage.getItem("userType") !== "Patient"?
       
     <div>
     <h3> Write your information </h3>
         
          <form className="align-bottom" onSubmit={this.onSubmit}>
          <label>name </label>
            <input
              placeholder="write about yourself"
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <label>overview </label>
            <input
              placeholder="write about yourself"
              type="text"
              required
              className="form-control"
              value={this.state.overview}
              onChange={this.onChangeOverview}
            />
  
            <label>conferences </label>
            <input
              placeholder="write about yourself"
              type="text"
              required
              className="form-control"
              value={this.state.conferences}
              onChange={this.onChangeConferences}
            />
  
            <label>insurance companies </label>
            <input
              placeholder="write about yourself"
              type="text"
              required
              className="form-control"
              value={this.state.insurance_companies}
              onChange={this.onChangeInsurance_companies}
            />
  
            <label>phone </label>
            <input
              placeholder="write about yourself"
              type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
  
            <label>location </label>
            <input
              placeholder="write about yourself"
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
  
  <label>working hour </label>
            <input
              placeholder="write about yourself"
              type="Time"
              required
              className="form-control"
              value={this.state.working_hour}
              onChange={this.onChangeWorking_hour}
            />
  
  
            <div className="col-sm-10">
              
              <button onClick={this.handleClick.bind(this)}>ADD </button>
            </div>
          </form>      
     </div>
          
    : 
      <h1>hello patient </h1>
      }
     </div>
      );
  }
}
