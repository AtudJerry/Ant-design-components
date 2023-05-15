import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {} from "antd";

function App() {
  return (
    <div className="App">
      <Topbar />
      
      <header className="App-header">
        <div className="content">
        <Sidebar/>
        

        <Routes>
       
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="Dashboard" element={<div>Dashboard</div>}></Route>
          <Route path="UserList" element={<div>UserList</div>}></Route>
          <Route path="Profile" element={<div>Profile</div>}></Route>
          <Route path="Signout" element={<div>Signout</div>}></Route>
        </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
