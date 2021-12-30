const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');

const ash = require('express-async-handler');

/** GET ALL CAMPUSES */

router.get('/', ash(async(req, res) => {
  let campuses = await Campus.findAll({include: [Student]});
  res.status(200).json(campuses);
}));

/** GET CAMPUS BY ID*/
router.get('/:id', ash(async(req, res) => {
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});
  res.status(200).json(campus);
}));

// Delete campus
router.delete('/:id', ash(async(req, res) => {
  await Campus.destroy({
    where: {
      id: req.params.id
    }
  });
  res.status(200).json("Deleted a campus!");
}));

// Add new campus
router.post('/', ash(async(req, res) => {
  let newCampus = await Campus.create(req.body);
  res.status(200).json(newCampus);
}));

// Edit Campus
router.put('/:id', ash(async(req, res) => {
  await Campus.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  let campus = await Campus.findByPk(req.params.id, {include: [Student]});
  res.status(201).json(campus);
}))

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;