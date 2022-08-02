import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard";
import UserPosts from "./Components/Pages/Dashboard/UserPosts";
import NotFound from "./Components/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="dashboard/:id" element={<UserPosts />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;