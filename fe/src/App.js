import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './components/NavbarComponent';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  // Placeholder function for adding a new todo
  // In a real app, this would also update the backend
  const addTodo = (newTodo) => {
    console.log('Adding new todo:', newTodo);
    // Add logic to update the state or backend
  };

  return (
    <AuthProvider>
    <Router>
      <NavbarComponent />
      <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register/>} />
  <Route path="/todo" element={<TodoList />} />
  <Route path="/add-todo" element={<AddTodo />} />
  <Route path="/" element={<TodoList/>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
