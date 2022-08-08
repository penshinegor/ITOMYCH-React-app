import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Pages/Dashboard";
import UserPosts from "./Components/Pages/Dashboard/UserPosts";
import NotFound from "./Components/Pages/NotFound";
import configureStore from "./Components/Store";
import { Provider } from "react-redux";

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dashboard/:id" element={<UserPosts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
