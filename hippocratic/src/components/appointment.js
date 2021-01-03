import React, { Component} from "react";
// import axios from "axios";
import $ from "jquery";




export default class AddAppointment extends Component {
    constructor(props) {
      super(props);
     
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     
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
  
    handleChange(evt){
      this.setState({
      [evt.target.name]:evt.target.value
      })
    // console.log(this.state)

    }
    
    handleSubmit(e) {
    e.preventDefault();
      const cases = {
        patientName:this.state.patientName,
        complaint:this.state.complaint,
        phone:this.state.phone,
        day:this.state.day,
        // time:this.state.time,
        date:this.state.date,
      };  
      $.ajax({
        url:"http://localhost:3000/appointments/booking",
        method:"POST",
        data:JSON.stringify(cases),
        contentType:"application/json",
        success:function (){
          console.log("data saved successfully ")
        },
        error:function(err){
          console.log("data can't be saved:", err)

        }

      })
    
   }

  
    render() {
      return (
        <div>
          <h3> Booking </h3>
          <form onSubmit={this.handleSubmit}>
          <label> patientName </label>
            <input
              placeholder="write"
              type="text"
              required
              className="form-control"
              name="patientName"
              value={this.state.patientName}
              onChange={this.handleChange}
            />
            <label>complaint </label>
            <input
              placeholder="write"
              type="text"
              required
              className="form-control"
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
            />
            <label>phone </label>
            <input
              placeholder="write"
              type="phone"
              required
              className="form-control"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
            <label>day </label>
            <input
              placeholder="write"
              type="day"
              required
              className="form-control"
              name="day"
              value={this.state.day}
              onChange={this.handleChange}
            />
  
            <label> time </label>
            <input
              placeholder="write"
              type="time"
              required
              className="form-control"
              // name="time"
              // value={this.state.time}
              // onChange={this.handleChange}
            />
  
            <label>date</label>
            <input
              placeholder="write"
              type="date"
              required
              className="form-control"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
  
            <div className="col-sm-10">
              <button type="submit"> BOOK </button>
            </div>
          </form>
        
        </div>
      );
    }
  }
  