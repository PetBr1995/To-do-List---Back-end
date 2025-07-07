📋 To-do List - Front-end
Este repositório contém a interface web de um sistema de gerenciamento de tarefas, desenvolvido em React com Material UI. O sistema permite a criação, visualização, edição e exclusão de tarefas, além de categorizá-las como concluídas ou pendentes.
🔗 Repositório: https://github.com/PetBr1995/To-do-List-Front-end

🚀 Tecnologias Utilizadas

React
React Router DOM
Axios
Material UI
JavaScript (ES6+)
Vite (caso esteja sendo utilizado)
MUI Icons


🧰 Funcionalidades

Criar tarefas com título, descrição e data de vencimento
Editar tarefas já existentes
Excluir tarefas com confirmação
Alterar status entre "pendente" e "concluído"
Listagem de tarefas em cards organizados
Feedback visual com Snackbar para ações como sucesso e erro
Validação de campos obrigatórios
```
📁 Estrutura de Pastas
src/
│
├── api/ # Arquivo de integração com a API (opcional)
├── components/ # Componentes reutilizáveis (Ex: Drawer, Navbar)
├── pages/ # Páginas principais: Tarefas, Criar, Editar
│ ├── Task.jsx
│ ├── CreateTask.jsx
│ └── EditTask.jsx
├── theme.js # Tema customizado do MUI
├── App.jsx # Componente raiz
├── main.jsx # Ponto de entrada da aplicação
└── routes.jsx # Definição das rotas
```

⚙️ Instalação e Execução
1. Clone o repositório
git clone https://github.com/PetBr1995/To-do-List-Front-end.git
cd To-do-List-Front-end

2. Instale as dependências
npm install

3. Configure a URL da API
Certifique-se de que o arquivo que faz requisições (ex: axios.get(...)) esteja apontando para o endereço correto da sua API, por padrão:
http://localhost:3001/api/todos

4. Execute o projeto
npm run dev

✅ Requisitos para rodar

Node.js (v18 ou superior recomendado)
Gerenciador de pacotes (npm ou yarn)
Backend da API rodando localmente na porta 3001
Navegador moderno (Chrome, Firefox, Edge)

🧪 Testes
Este projeto não possui testes automatizados no momento, mas todos os fluxos foram testados manualmente para garantir integridade funcional.

📌 Observações

A interface foi desenvolvida utilizando o padrão Material Design.
O layout é responsivo e pode ser utilizado em resoluções diferentes.
A listagem das tarefas é atualizada dinamicamente após criar, editar ou deletar.
O status é salvo no banco como um booleano done, mas convertido para "concluído" ou "pendente" na interface.


🧑‍💼 Autor
Desenvolvido por Peterson Brito como parte de um teste técnico.

LinkedIn: (www.linkedin.com/in/peterson-brito-048380149)
Email: (dev.petersonbrito@gmail.com)



-----------------------------------------



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