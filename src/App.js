import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard";
import UserPosts from "./Components/Pages/Dashboard/UserPosts";
import NotFound from "./Components/Pages/NotFound";
import { useState } from "react";
import EmailContext from "./Components/Context";

function App() {

  const [emailInfo, setEmailInfo] = useState();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <EmailContext.Provider value={[emailInfo, setEmailInfo]}>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="dashboard/:id" element={<UserPosts />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </EmailContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;