import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {} from "antd";
import Billers from "./Components/Billers";

function App() {
  return (
    <div className="App">
      <Topbar />
      
      <header className="App-header">
        <div className="contents">
        <Sidebar/>
        

        <Routes>
       
          <Route path="/" element={<Billers/>}></Route>
          <Route path="Systeme" element={<div>Systeme</div>}></Route>
          <Route path="Editer Mot de passe" element={<div>Editer Mot de passe</div>}></Route>
          <Route path="Gestion des factures" element={<div>Gestion des factures</div>}></Route>
          <Route path="Contacts" element={<div>Contacts</div>}></Route>
          <Route path="Statistiques" element={<div>Statistiques</div>}></Route>
          <Route path="Consultations" element={<div>Consultations</div>}></Route>
        </Routes>
        </div>
      </header>
      {/* <Bod/> */}
    </div>
  );
}

export default App;
