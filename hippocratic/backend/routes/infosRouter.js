const router = require("express").Router();
let Info = require("../models/infoModel");

router.route('/').get((req, res) => {
  Info
    .find()
    .then((infos) => res.json(infos))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/create").post((req, res) => {
  const overview = req.body.overview;
  const insurance_companies = req.body.insurance_companies;
  const conferences = req.body.conferences;
  const phone = req.body.phone;
  const location = req.body.location;

  const newInfo = new Info ({
    overview,
    insurance_companies,
    conferences,
    phone,
    location

  });

  newInfo
    .save()
    .then(() => res.json("Info added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
