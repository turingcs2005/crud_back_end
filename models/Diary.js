const mongoose = require('mongoose');

const DiarySchema = new mongoose.Schema({
  diaryDate: Date,
  diaryContent: String
});

module.exports = mongoose.model('Diary', DiarySchema, 'diaries_of_claire');