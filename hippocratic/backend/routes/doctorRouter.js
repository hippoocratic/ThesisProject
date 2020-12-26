const router = require("express").Router();
const Doctor = require("../models/doctorModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;
console.log(passwordCheck, 1)
    //validation
    if (!email || !password)
      return res  
        .status(400)
        .json({ msg: " Not all fields have been entered."});

    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: " The password need to be at least 5 characters long. "});

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for veification. "});

    const existingDoctor = await Doctor.findOne({ email: email });
    if (existingDoctor)
      return res
        .status(400)
        .json({ msg: " An Account with this email already exists. " });

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newDoctor = new Doctor({
      email,
      password: passwordHash,
      displayName,
    });
    const savedDoctor = await newDoctor.save();
    res.json(savedDoctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //validate
    if (!email || !password)
      return res
        .status(400)
        .json({ msg: " Not all fields have been entered. " });

    const doctor = await Doctor.findOne({ email: email });
    if (!doctor)
      return res
        .status(400)
        .json({ msg: "No Account with this email has been registered" });

    const isMatch = await bcrypt.compare(password, doctor.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentails" });

    const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET);
    res.json({
      token,
      doctor: {
        id: doctor._id,
        displayName: doctor.displayName,
       
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// To Delete An Account if you are logged in .
router.delete("/delete", auth, async (req, res) => {
  try {
    const deleteDoctor = await Doctor.findByIdAndDelete(req.doctor);
    res.json(deletedDoctor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const doctor = await Doctor.findById(verified.id);
    if (!doctor) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const doctor = await Doctor.findById(req.doctor);
  res.json({
    displayName: doctor.displayName,
    id: doctor._id,
  });
});

module.exports = router;
