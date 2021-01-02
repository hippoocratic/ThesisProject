import React, { Component} from "react";
import axios from "axios";


export default class AddAppointment extends Component {
    constructor(props) {
      super(props);
      this.onChangePatientName = this.onChangePatientName.bind(this);
      this.onChangeComplaint = this.onChangeComplaint.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeDay = this.onChangeDay.bind(this);
      this.onChangeTime = this.onChangeTime.bind(this);
      this.onChangeDate = this.onChangeDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
     
      this.state = {
        patientName:"",
        complaint:"",
        phone:"",
        day: "",
        time: "",
        date: "",
        appointment:[]
    
      };
    }
    onChangePatientName(e) {
      this.setState({
        patientName: e.target.value,
      });
    }
    onChangeComplaint(e) {
        this.setState({
            complaint: e.target.value,
        });
      }
      onChangePhone(e) {
        this.setState({
          phone: e.target.value,
        });
      }
    onChangeDay(e) {
      this.setState({
        day: e.target.value,
      });
    }
  
    onChangeTime(e) {
      this.setState({
        time: e.target.value,
      });
    }
  
    onChangeDate(e) {
      this.setState({
        date: e.target.value,
      });
    }
  
    handleClick() {
      window.location = "/appointment";
    }
    onSubmit(e) {
    e.preventDefault();
      const task = {
        patientName:this.state.patientName,
        complaint:this.state.complaint,
        phone:this.state.phone,
        day:this.state.day,
        time:this.state.time,
        date:this.state.date,
       
        
      };  
          console.log(task);
      axios.post('http://localhost:3000/appointment/booking', task)
       
        .then( res => console.log(res.data));
      this.setState({
        patientName:"",
        complaint:"",
        phone:"",
        day: "",
        time: "",
        date: "",
      
      });
     
   }

  
    render() {
      return (
        <div>
          <h3> Booking </h3>
          <form className="align-bottom" onSubmit={this.onSubmit}>
          <label>patientName </label>
            <input
              placeholder="write"
              type="text"
              required
              className="form-control"
              value={this.state.patientName}
              onChange={this.onChangePatientName}
            />
            <label>complaint </label>
            <input
              placeholder="write"
              type="text"
              required
              className="form-control"
              value={this.state.complaint}
              onChange={this.onChangeComplaint}
            />
            <label>phone </label>
            <input
              placeholder="write"
              type="phone"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
            <label>day </label>
            <input
              placeholder="write"
              type="day"
              required
              className="form-control"
              value={this.state.day}
              onChange={this.onChangeDay}
            />
  
            <label>time </label>
            <input
              placeholder="write"
              type="time"
              required
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTime}
            />
  
            <label>date</label>
            <input
              placeholder="write"
              type="date"
              required
              className="form-control"
              value={this.state.date}
              onChange={this.onChangeDate}
            />
  
            <div className="col-sm-10">
              
              <button onClick={this.handleClick.bind(this)}> BOOK </button>
            </div>
          </form>
        
        </div>
      );
    }
  }
  