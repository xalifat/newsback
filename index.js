const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/categories.route"));
app.use(require("./routes/comments.route"));
app.use(require('./routes/news.route.route'))



mongoose.connect("mongodb+srv://xalifat:xalifat2003@cluster0.jwobhmg.mongodb.net/news", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000, () => {
  console.log('Сервер запущен успешно')
})