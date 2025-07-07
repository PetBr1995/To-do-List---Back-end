const Todo = require("../models/todo");

// GET: Lista todas as tarefas
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

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
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas." });
  }
};

// POST: Cria uma nova tarefa
exports.createTodo = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTodo = await Todo.create({ title, description, dueDate });

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar tarefa." });
  }
};

// PUT: Atualiza uma tarefa existente
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Converte status textual para booleano (caso ainda venha "status")
    if (updateData.status !== undefined) {
      updateData.done = updateData.status === "concluído";
      delete updateData.status;
    }

    const updated = await Todo.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    res.json({
      _id: updated._id,
      title: updated.title,
      description: updated.description,
      dueDate: updated.dueDate,
      status: updated.done ? "concluído" : "pendente",
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar tarefa." });
  }
};

// DELETE: Deleta uma tarefa
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    res.json({ message: "Tarefa deletada com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar tarefa." });
  }
};
