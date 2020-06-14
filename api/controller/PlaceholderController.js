const pl_url = "https://jsonplaceholder.typicode.com/";
const request = require('request');

module.exports = {

	listar: function(req, res) {
		
		request.get(pl_url + 'posts', function(err, resp, body) {
			if (err) {
				console.log(err)
				return res.status(400).json(err);
			} else {
				//console.log("res: ", resp);
				//console.log("body: ", body);
				body = JSON.parse(body);
				//console.log(body[0])
				return res.json(body);
			}
		});
	},

	ver: function(req, res) {
		var post = req.params.post;

		request.get(pl_url + `posts/${post}`, function(err, resp, body) {
			if (err) {
				console.log(err)
				return res.status(400).json(err);
			} else {
				body = JSON.parse(body);
				var isEmpty = Object.keys(body).length === 0 && body.constructor === Object
				if (isEmpty) {
					return res.status(404).json({
						mensaje: "Not found"
					})
				} else {
					return res.json(body)	
				}
				
			}
		});
	},

	crear: function(req, res) {
		var post = {
			title: req.body.title,
			body: req.body.body,
			userId: req.body.userid
		};
		request.post({url: pl_url + `posts`, json: post}, function(err, resp, body) {
			if (err) {
				console.log(err)
				return res.status(400).json(err);
			} else {
				//console.log(resp)
				//body = JSON.parse(body);
				console.log(body)
				return res.json(body)
			}
		})
	},

	editar: function(req, res) {
		var id = req.params.post;
		var post = {
			title: req.body.title,
			body: req.body.body
		};
		request.put({url: pl_url + `posts/${id}`, json: post}, function(err, resp, body) {
			if (err) {
				console.log(err)
				return res.status(400).json(err);
			} else {
				if (resp.statusCode == 500) {
					return res.status(404).json({
						mensaje: "Not found"
					})
				} else {
					return res.json(body)	
				}
				
			}
		})
	},

	eliminar: function(req, res) {
		var post = req.params.post;

		request.delete(pl_url + `posts/${post}`, function(err, resp, body) {
			if (err) {
				console.log(err)
				return res.status(400).json(err);
			} else {
				if (resp.statusCode == 200) {
					return res.json({
						mensaje: "Post eliminado con éxito",
					})
				} else {
					return res.status(404).json({
						mensaje: "Not Found"
					})	
				}
			}
		});
	},


}