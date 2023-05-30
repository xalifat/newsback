const Comment = require("../model/Comments.model");

module.exports.commentsController = {
  deleteComments: (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
      .then(() => res.json("комментарий удален"))
      .catch((err) => console.log(err));
  },
  createComment: (req, res) => {
    Comment.create({
      user: req.body.user,
      text: req.body.text,
      newsId: req.params.id,
    })
      .then(() => res.json("добавление комментария к определенной новости"))
      .catch((err) => res.json(err));
  },
  getComment: (req, res) => {
    Comment.find({ newsId: req.params.id })
      .then(() => res.json("вывод всех комментариев определенной новости"))
      .catch((err) => res.json(err));
  },
};
