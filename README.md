
# Todo App

This is a full-stack Todo application built with React (Vite) for the frontend and Node.js/Express with MySQL for the backend.

## Prerequisites

- Node.js (v16 or higher recommended)
- npm
- MySQL server

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/RavinduThilina222/todo-app.git
cd todo-app
```

### 2. Set up the backend (server)

```
cd server
npm install
```

Create a `.env` file in the `server` directory with your MySQL credentials:

```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=todoapp
PORT=5000
```

Make sure the database exists and the user has privileges. Example SQL:

```
CREATE DATABASE IF NOT EXISTS todoapp;
GRANT ALL PRIVILEGES ON todoapp.* TO 'your_mysql_user'@'localhost' IDENTIFIED BY 'your_mysql_password';
FLUSH PRIVILEGES;
```

Start the backend server:

```
node server.js
```

### 3. Set up the frontend (client)

Open a new terminal in the project root:

```
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Features
- Add, edit, complete, and delete tasks
- Responsive design for desktop and mobile
- MySQL database for persistent storage

## License
MIT
