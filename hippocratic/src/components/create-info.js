import React, { Component } from "react";
import axios from "axios";

export default class CreateInfo extends Component {
  constructor(props) {
    super(props);
    this.onChangeOverview = this.onChangeOverview.bind(this);
    this.onChangeConferences = this.onChangeConferences.bind(this);
    this.onChangeInsurance_companies = this.onChangeInsurance_companies.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      overview: "",
      conferences: "",
      insurance_companies: "",
      phone: "",
      location: "",
      infos: [],
    };
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
  handleClick() {
    window.location = "/profile";
  }
  onSubmit(e) {
    e.preventDefault();
    const input = {
      overview: this.state.overview,
      conferences: this.state.conferences,
      insurance_companies: this.state.insurance_companies,
      phone: this.state.phone,
      location: this.state.location,
    };
       
    axios.post('http://localhost:3000/infos/add', input)
    
      .then(res=> console.log(res.data));
    this.setState({
      overview: "",
      conferences: "",
      insurance_companies: "",
      phone: "",
      location: "",
    });
    console.log(input);
  }
  render() {
    return (
      <div>
        <h3> Write your information </h3>
        <form className="align-bottom" onSubmit={this.onSubmit}>
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

          <div className="col-sm-10">
            
            <button onClick={this.handleClick.bind(this)}>ADD </button>
          </div>
        </form>
      </div>
    );
  }
}
