import axios from "axios";

const API_URL = "http://localhost:5000/tasks"; // json-server backend


export const getTasks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch tasks");
  }
};


export const addTask = async (task) => {
  try {
    const res = await axios.post(API_URL, task);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add task");
  }
};


export const updateTask = async (id, updatedTask) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedTask);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update task");
  }
};


export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete task");
  }
};
