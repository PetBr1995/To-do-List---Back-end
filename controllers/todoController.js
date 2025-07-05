const Todo = require("../models/todo");

exports.getAllTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });

  // Mapeia done → status legível
  const todosFormatados = todos.map((todo) => ({
    _id: todo._id,
    title: todo.title,
    description: todo.description,
    dueDate: todo.dueDate,
    status: todo.done ? "concluído" : "pendente",
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  }));

  res.json(todosFormatados);
};

exports.createTodo = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTodo = await Todo.create({ title, description, dueDate });
  res.status(201).json(newTodo);
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updateData = { ...req.body };

  // Converte "status" → "done"
  if (updateData.status === "concluído") {
    updateData.done = true;
  } else if (updateData.status === "pendente") {
    updateData.done = false;
  }

  // Remove status do objeto para não tentar gravar no Mongo
  delete updateData.status;

  const updated = await Todo.findByIdAndUpdate(id, updateData, { new: true });

  if (!updated) return res.status(404).json({ error: "Tarefa não encontrada" });

  // Retorna resposta com status legível
  res.json({
    _id: updated._id,
    title: updated.title,
    description: updated.description,
    dueDate: updated.dueDate,
    status: updated.done ? "concluído" : "pendente",
    createdAt: updated.createdAt,
    updatedAt: updated.updatedAt,
  });
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Tarefa deletada" });
};
