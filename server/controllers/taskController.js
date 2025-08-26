import pool from "../db.js";

// GET all tasks
export const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create new task
export const createTask = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Task text is required" });

    const [result] = await pool.query("INSERT INTO tasks (text) VALUES (?)", [
      text,
    ]);

    res.json({ id: result.insertId, text, completed: false });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;

    await pool.query("UPDATE tasks SET text=?, completed=? WHERE id=?", [
      text,
      completed,
      id,
    ]);

    res.json({ id, text, completed });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM tasks WHERE id=?", [id]);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
