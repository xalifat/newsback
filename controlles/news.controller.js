const News = require("../model/News.model");




module.exports.newsController = {

	createNews: (req, res) => { // добавление новости 
		News.create({
			title: req.body.title,
			text: req.body.text,
			categoriesId: req.body.categoriesId
		}).then(() => {
			res.json('Новость добавлена')
		}).catch((err) => {
			res.json(err);
		})


	}, // удаление новости
	deleteNews: (req, res) => {
		News.findByIdAndDelete(req.params.id).then(() => res.json('новость удалена')).catch((err) => console.log(err))

	}, // изменение новости
	editNews: (req, res) => {
		News.findByIdAndUpdate(req.params.id, {
			title: req.body.title,
			text: req.body.text,
			categoriesId: req.body.categoriesId
		}).then(() => res.json('новость изменена')).catch((err) => console.log(err))

	}, // вывод всех новостей
	getNews: (req, res) => {
		News.find({}).then((news) => res.json(news)).catch((err) => console.log(err))
	}, // вывод определенной новости
	getNewsById: (req, res) => {
		News.findById(req.params.id).then(() => res.json('вывод определенной новости')).catch((err) => console.log(err))
	},
	getNewsByCateg: (req, res) => {
		News.find({categoriesId: req.body.categoriesId}).then(() => res.json('вывод всех новостей из определенной категории')).catch((err) => res.json(er))
	}
}
