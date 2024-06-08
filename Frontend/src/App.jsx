import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Components/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/forgotPassword"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
