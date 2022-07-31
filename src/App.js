import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/posts' element={<Dashboard />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;