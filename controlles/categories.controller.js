const Categories = require("../model/Categories.model");




module.exports.categoriesController = {
	
	createCategories: (req, res) => {
		Categories.create({
			name: req.body.name
		}).then(() => {
			res.json('категория создана')
		}).catch((err) => {
			console.log(err);
		})
	},
	deleteCategoties: (req, res) => {
		Categories.findByIdAndDelete(req.params.id).then(() => res.json('категория удалена')).catch((err) => console.log(err))

	}, 
	getCategories: (req, res) => {
		Categories.find({}).then((categories) => res.json(categories)).catch((err) => console.log(err))
	}

}

	  
