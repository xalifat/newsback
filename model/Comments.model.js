const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user: String,
  text: String,
  newsId: {
	type: mongoose.SchemaTypes.ObjectId,
	ref: 'News'
  }
  
});

const Comment = mongoose.model('Comments', commentSchema);


module.exports = Comment;