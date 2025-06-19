import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../components/HomePage';
import { Test } from '../components/Test';
import Tasks from '../components/Tasks';
import AddTasks from '../components/AddTasks';
import {SingleTask} from "../components/SingleTask"
import Login from '../components/LoginPage';
import PrivateComponent from "../components/PrivateComponent";

export function AppRoutes() {
  return (
    <BrowserRouter>
     
      <Routes>
        {/* Public Route */}
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            (
              <PrivateComponent>
                <HomePage />
              </PrivateComponent>
            )
          }
        />
        <Route
          path="/tasks"
          element={
            (
              <PrivateComponent>
                <Tasks />
              </PrivateComponent>
            )
          }
        />
        <Route
          path="/add-task"
          element={
            (
              <PrivateComponent>
                <AddTasks />
              </PrivateComponent>
            )
          }
        />
        <Route
          path="/task/:id"
          element={
            (
              <PrivateComponent>
                <SingleTask />
              </PrivateComponent>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}