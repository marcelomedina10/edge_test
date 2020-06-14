const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session')
const path = require('path');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const routes = require('./config/route');
const app = express();
const PORT = (process.env.PORT) ? process.env.PORT : 3000;
const MAX_AGE_ONE_DAY = 24 * 60 * 60 * 1000;//24 horas / 1 día

app.use(cors());

app.use(cookieSession({
	name: "edge",
	keys: ["WVMvMnMayWVE5xVaoHHPkpFJqivmwhM7"],
	maxAge: MAX_AGE_ONE_DAY,
	secure: true,
	httpOnly: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: "EDGE TEST",
			description: "API para test de Edge",
			contact: {
				name: "Marcelo Medina"
			},
			servers: ["http://localhost:3000"]
		}
	},
	apis: ["index.js"],
	basePath: '/'
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//extensión para rutas.
routes.api(app);

const server = app.listen(PORT, function() {
	console.log(`Servidor de test de edge iniciado en puerto ${PORT}`);
});