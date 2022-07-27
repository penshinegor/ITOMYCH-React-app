import {BrowserRouter, Routes, Route} from "react-router-dom";  
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home/";
import Posts from "./Components/Pages/Messages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/posts' element={<Posts />}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;