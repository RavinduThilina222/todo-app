

# Todo App

This is a full-stack Todo application built with React (Vite) for the frontend and Node.js/Express with MySQL for the backend.

## Project Setup & Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- npm
- MySQL server

### 1. Clone the repository
```
git clone https://github.com/RavinduThilina222/todo-app.git
cd todo-app
```

### 2. Install dependencies

#### Backend (server)
```
cd server
npm install
```

#### Frontend (client)
```
cd ..

```

## Available Scripts

### Frontend (from project root)
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

### Backend (from /server)
- `node server.js` — Start Express server

## API Configuration

### Environment Variables
Create a `.env` file in the `server` directory:
```
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=todoapp
PORT=5000
```

### Database Setup
Make sure the database exists and the user has privileges. Example SQL:
```
CREATE DATABASE IF NOT EXISTS todoapp;
GRANT ALL PRIVILEGES ON todoapp.* TO 'your_mysql_user'@'localhost' IDENTIFIED BY 'your_mysql_password';
FLUSH PRIVILEGES;
```

### API Endpoints
- `GET /tasks` — Get all tasks
- `POST /tasks` — Create a new task (body: `{ text }`)
- `PUT /tasks/:id` — Update a task (body: `{ text, completed }`)
- `DELETE /tasks/:id` — Delete a task

## Assumptions & Design Decisions
- Tasks have a `text` and `completed` status
- Input validation is performed on both frontend and backend
- The backend expects a MySQL database named `todoapp` with a `tasks` table
- The UI is designed for clarity and responsiveness using Tailwind CSS
- API errors are handled and surfaced in the UI

## Known Limitations & Areas for Improvement
- No user authentication (all tasks are public)
- No due dates, priorities, or categories for tasks
- No bulk actions (e.g., complete/delete multiple tasks)
- No undo/redo functionality
- Minimal backend validation (could be expanded)
- No automated tests
- Error messages could be more user-friendly

## License
MIT
