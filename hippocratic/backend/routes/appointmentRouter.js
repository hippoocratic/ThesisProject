const router = require("express").Router();
let Appointment = require("../models/appointmentModel");


router.route("/").get((req, res) => {
  Appointment.find()
      .then((appointments) => res.json(appointments))
      .catch((err) => res.status(400).json("Error :" + err));
  });
  
  router.route("/booking").post((req, res) => {
   
    const patientName =req.body.patientName;
    const complaint =req.body.complaint;
    const phone =Number(req.body.phone);
    const day = req.body.day;
    const time = req.body.time;
    const date =req.body.date;
  
    const newAppointment = new Appointment({
      patientName,
      complaint,
      phone,
      day,
      time,
      date,
      
    });
  
    newAppointment.save()
      .then(() => res.json("Appointment added!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  router.route("/:id").get((req, res) => {
    Appointment.findById("5ff96778f4fa7f075efeaa13")
      .then((appointment) => res.json(appointment))
      .catch((err) => res.status(400).json("Error:" + err));
  });
  module.exports = router;