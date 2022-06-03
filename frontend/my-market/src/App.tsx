import React from 'react';
import 'antd/dist/antd.min.css'; // or 'antd/dist/antd.less'
import './css/App.css';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import Home from "./view/home";
import Register from "./view/register";
import Login from "./view/login";
import FindPassword from "./view/findPassword";
import RegisterSuccess from "./view/registerSuccess";

function App() {
      return (
          <Router>
              <div className="App">
                  <Routes>
                      <Route path="*" element={<Navigate to="/home" />} />
                      <Route path="/home" element={ <Home />} />
                      <Route path="/register" element={ <Register />} />
                      <Route path="/login" element={ <Login />} />
                      <Route path="/findPassword" element={ <FindPassword />} />
                      <Route path="/registerSuccess" element={ <RegisterSuccess />} />
                  </Routes>
              </div>
          </Router>

  );
}

export default App;
