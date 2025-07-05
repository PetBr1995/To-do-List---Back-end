const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ToDo List API',
      version: '1.0.0',
      description: 'API para gerenciamento de tarefas',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['./routes/*.js'], // Vai buscar os comentários JSDoc nas rotas
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
