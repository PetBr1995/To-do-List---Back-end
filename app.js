require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

// Inicializa app primeiro!
const app = express();

// Conecta com o MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas Swagger (depois do app criado)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas da API
app.use('/api/todos', todoRoutes);

// Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
