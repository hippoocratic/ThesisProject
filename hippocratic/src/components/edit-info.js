import React, { Component } from "react";
import axios from "axios";

export default class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeOverview = this.onChangeOverview.bind(this);
    this.onChangeConferences = this.onChangeConferences.bind(this);
    this.onChangeInsurance_companies = this.onChangeInsurance_companies.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name:"",
      overview: "",
      conferences: "",
      insurance_companies: "",
      phone: "",
      location: "",
    }
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/infos/")
      .then(response => {
        this.setState({
          name: response.data.name,
          overview: response.data.overview,
          conferences: response.data.conferences,
          insurance_companies: response.data.insurance_companies,
          phone: response.data.phone,
          location: response.data.location,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeOverview(e) {
    this.setState({
      overview: e.target.value
    })
  }
  onChangeConferences(e) {
    this.setState({
      conferences: e.target.value
    })
  }

  onChangeInsurance_companies(e) {
    this.setState({
      insurance_companies: e.target.value
    })
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const input = {
      overview: this.state.overview,
      conferences: this.state.conferences,
      insurance_companies: this.state.insurance_companies,
      phone: this.state.phone,
      location: this.state.location,
    }
    console.log(this.props)
    axios
      .post(
        "http://localhost:3000/infos/update/"+this.props.match.params.id,
        input
      )
      .then(res => console.log(res.data))
      .catch(function (error) {
        console.log(error);
      });
    window.location = "/profile";
  }
  render() {
    if(localStorage.getItem("auth-token") !== null && ("userType") !== ("Patient")){
    return (
      <div>
        <h3 className="font-weight-bold deep-purple-text" style={{fontFamily:"Courier"}}>Edit </h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
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
</div>
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

       
          <div className="form-group">
        <input type="submit" value="EditInput" className="btn btn-primary btn btn-outline-#4a148c purple darken-4" />
        </div>
        </form>
      </div>
    );
  } else {
    return ( <h1>Please Log in </h1>)
  }
  }
}
