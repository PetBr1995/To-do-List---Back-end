📌 To-do List - Back-end
API RESTful desenvolvida com Node.js, Express e MongoDB para gerenciamento de tarefas (CRUD). Este projeto faz parte de um teste técnico e é utilizado em conjunto com o front-end React.

🚀 Funcionalidades

✅ Criar tarefa
📋 Listar todas as tarefas
✏️ Editar tarefa
🗑️ Deletar tarefa
🔎 Visualizar tarefa por ID
🧠 Atualizar apenas os campos modificados
🧾 Documentação da API com Swagger


🧪 Tecnologias Utilizadas

Node.js
Express
MongoDB + Mongoose
Swagger (Documentação)
CORS + Body Parser
Nodemon (para desenvolvimento)

```
🗂 Estrutura do Projeto
To-do-List---Back-end/
│
├── controllers/ # Lógica das rotas (CRUD)
├── models/ # Schema Mongoose (Todo)
├── routes/ # Rotas Express (todos, documentação)
├── swagger/ # Arquivo swagger.json
├── .env # Variáveis de ambiente (porta, Mongo URI)
├── .gitignore
├── server.js # Arquivo principal do servidor
└── package.json

```

🛠️ Como Executar o Projeto
🔁 Clonar o repositório
git clone https://github.com/PetBr1995/To-do-List---Back-end.git
cd To-do-List---Back-end

📦 Instalar dependências
npm install

🔐 Criar o arquivo .env
Na raiz do projeto, crie um arquivo .env com o seguinte conteúdo:
PORT=3001
MONGODB_URI=mongodb://localhost:27017/todolist

▶️ Iniciar o servidor
npm run dev

O servidor será iniciado em: http://localhost:3001
📘 Documentação da API (Swagger)
Após iniciar o servidor, acesse a documentação interativa em:
📚 http://localhost:3001/api-docs
📫 Rotas da API



Método
Rota
Descrição



GET
/api/todos
Lista todas as tarefas


GET
/api/todos/:id
Busca uma tarefa por ID


POST
/api/todos/create
Cria uma nova tarefa


PUT
/api/todos/:id
Atualiza campos da tarefa


DELETE
/api/todos/delete/:id
Deleta uma tarefa existente


✍️ Exemplo de Requisição PUT (Atualização Parcial)
PUT /api/todos/64c123456789abc12345

{
  "title": "Nova tarefa",
  "status": "concluído"
}

⚠️ Campos não enviados na requisição permanecerão inalterados no banco de dados.
🧼 Git e Versionamento
# Inicializar repositório Git (caso ainda não esteja iniciado)
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit"

# Adicionar repositório remoto
git remote add origin https://github.com/PetBr1995/To-do-List---Back-end.git

# Push para a branch principal
git branch -M main
git push -u origin main

🤝 Integração com o Front-end
Este back-end é consumido pelo front-end React disponível em:
🔗 https://github.com/PetBr1995/To-do-List-Front-end

👨‍💻 Autor
Peterson Brito💼 Desenvolvedor Fullstack📧 petersonbrito.dev@gmail.com