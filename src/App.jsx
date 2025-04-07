import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Sales from "./Sales/Sales";
import Login from "./Login";
import ProjectEngineer from "./Project_Engineer/ProjectEngineer";
import ProjectManager from "./Project_Manager/ProjectManager";
// import QualityEngineer from "./Quality_Engineer/Quality_Engineer";
import Store from "./Store/Store";
// import Purchase from "./Purchase/Purchase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/project-engineer" element={<ProjectEngineer />} />
        <Route path="/project-manager" element={<ProjectManager />} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/quality-engineer" element={<QualityEngineer />} />
        
        <Route path="/purchase" element={<Purchase />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
