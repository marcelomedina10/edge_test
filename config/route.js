const us = require('../api/service/UsuarioService');
const plController = require('../api/controller/PlaceholderController');
const usuarioController = require('../api/controller/UsuarioController');

module.exports = {

	api: function(app) {
		
		app.get('/posts', us.authToken, plController.listar);
		app.post('/posts', us.authToken, plController.crear);
		app.get('/posts/:post', us.authToken, plController.ver);
		app.put('/posts/:post', us.authToken, plController.editar);
		app.delete('/posts/:post', us.authToken, plController.eliminar);

		app.post('/token', usuarioController.token);

	}

}