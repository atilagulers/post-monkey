const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    text: String,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  {timestamps: true}
);

module.exports = mongoose.model('Comment', commentSchema);
