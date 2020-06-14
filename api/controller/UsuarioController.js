const jwt = require('jwt-simple');
const moment = require('moment');
const usuarioService = require('../service/UsuarioService');

const TOKEN_EXPIRATION_DAYS = 2;
const USER_NAME = 'edge';
const USER_PASS = '123';
module.exports = {

	token: function(req, res) {
		var usuario = {
			name: req.body.name,
			password: req.body.password
		}

		var token = null;

		if (usuario.name == USER_NAME && usuario.password == USER_PASS) {
			const payload = {
				sub: {
					name: usuario.name
				},
				iat: moment().unix(),
				exp: moment().add(TOKEN_EXPIRATION_DAYS, 'days').unix()
			}

			token = jwt.encode(payload,usuarioService.getSecretSession())

			return res.json({
				token: token,
				mensaje: "La contraseña es correcta"
			})
		} else {
			return res.status(400).json({
				mensaje: "Error de usuario y/o contraseña"
			});
		}
	}
}