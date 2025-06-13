import { useState } from "react";

import "./App.css";
import { Count } from "./components/Count";
import { Test } from "./components/Test";
import Profile from "./components/Profile";
import Form from "./components/Form";
import { AppRoutes } from "./routes/Routes";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./components/HomePage";
import { useCounter } from "./hooks/useCounter";
import StudentProfile from "./components/StudentProfile";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <div className="h-screen  ">
      <TaskProvider>
      <AppRoutes />
      </TaskProvider>
    
    </div>
  );
}

export default App;
