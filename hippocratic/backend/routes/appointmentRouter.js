const router = require("express").Router();
let Appointment = require("../models/appointmentModel");


router.route("/appoin").get((req, res) => {
  Appointment.find()
      .then((appointments) => res.json(appointments))
      .catch((err) => res.status(400).json("Error :" + err));
  });
  
  router.route("/booking").post((req, res) => {
    
    const patientName =req.body.patientName;
    const day = req.body.day;
    const time = Number(req.body.time);
    const date =req.body.date;
  
    const newAppointment = new Appointment({
      patientName,
      day,
      time,
      date,
      
    });
  
    newAppointment.save()
      .then(() => res.json("Appointment added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  router.route("/:id").get((req, res) => {
    Appointment.findById(req.params.id)
      .then((appointment) => res.json(appointment))
      .catch((err) => res.status(400).json("Error:" + err));
  });
  module.exports = router;