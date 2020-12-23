const router = require("express").Router();
let Info = require("../models/infoModel");


router.route("/").get((req, res) => {
  Info
    .find()
    .then((infos) => res.json(infos))
    .catch((err) => res.status(400).json("Error :" + err));
});

router.route("/create").post((req, res) => {
  const overview = req.body.overview;
  const insurance_companies = req.body.insurance_companies;
  const conferences = req.body.conferences;
  const phone = Number(req.body.phone);
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

router.route('/:id').get((req, res)=>{
  console.log(req.params)
  Info.findById(req.params.id)
  .then(info => res.json(info))
  .catch(err => res.status(400).json("Error:"+err));
});

router.route('/:id').delete((req, res)=>{
  Info.findByIdAndDelete(req.params.id)
  .then(()=> res.json('Info Deleted'))
  .catch(err => res.status(400).json("Error:"+err));
});

router.route('/update/:id').post((req, res)=>{
  Info.findById(req.params.id)
  .then(info => {
    info.overview= req.body.overview;
    info.conferences= req.body.conferences;
    info.insurance_companies= req.body.insurance_companies;
    info.phone= Number(req.body.phone);
    info.location= req.body.location;
   
    info.save()
    .then(()=> res.json('Info Updated!'))
    .catch(err => res.status(400).json("Error:"+err));
  })
  .catch(err => res.status(400).json("Error:"+err));
});
module.exports = router;
