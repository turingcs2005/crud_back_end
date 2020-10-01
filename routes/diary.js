const express = require('express');
const router = express.Router();
const Diary = require('../models/Diary');
// get all diaries
router.get('/', (req, res) => {
  Diary.find( (err, data) => {
    if (err) return next(err);
    res.json(data);});
});
// get a diary by id
router.get('/:id', (req, res, next) => {
  Diary.findById(req.params.id, (err, data) => {
    if (err) return next(err);
    res.json(data);
  });
});
// add a new diary entry
router.post('/', (req, res, next) => {
  Diary.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(data);
  });
});
// update a diary entry
router.put('/:id', (req, res, next) => {
  Diary.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(data);
  });
});
// delete a diary entry
router.delete('/:id', (req, res, next) => {
  Diary.findByIdAndRemove(req.params.id, req.body, (err, data) => {
    if (err) return next(err);
    res.json(data);
  });
});
module.exports = router;