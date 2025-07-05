const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         dueDate:
 *           type: string
 *           format: date
 *         done:
 *           type: boolean
 */

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/', getAllTodos);

/**
 * @swagger
 * /api/todos/create:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: Tarefa criada
 */
router.post('/create', createTodo);

/**
 * @swagger
 * /api/todos/update/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 */
router.put('/update/:id', updateTodo);

/**
 * @swagger
 * /api/todos/delete/{id}:
 *   delete:
 *     summary: Deleta uma tarefa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa deletada
 */
router.delete('/delete/:id', deleteTodo);

module.exports = router;
