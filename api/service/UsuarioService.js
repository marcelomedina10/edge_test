const jwt = require('jwt-simple');
const moment = require('moment');
const SECRET_SESSION = 'uWLZmFr8ZsZpH8QqoCh17FdPIwba1fpa';

module.exports = {

	authToken: function(req, res, next) {
		console.log("Verificamos token")

		var mensaje = {
			mensaje: "El token es inválido"
		};
		const token = req.headers.authorization;
		// console.log("token: ", token)
		// console.log("headers: ", req.headers)
		if (!token) {
			return res.status(401).json(mensaje)
		}

		const payload = jwt.decode(token, SECRET_SESSION, true);

		if (payload.exp <= moment().unix()) {
			mensaje.mensaje = `El token ha expirado`
			console.log(mensaje);
			token = null;
			return res.status(401).json(mensaje)
		} else {
			//Guardmos el nombre de usuario en el request.
			req.user = payload.sub
			next();
		}
	},

	getSecretSession: function() {
		return SECRET_SESSION;
	},
}