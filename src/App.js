import { Route, Routes } from "react-router-dom";
import NavBar from "./component/Nav";
import "./index.css"
import { Header } from "./Pages/Home/index";
import { LoginForm as Login } from "./Pages/Login/index";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login/>} />
        {/* TODO: About us */}
      </Routes>
      {/* TODO: Footer */}
    </>
  );
}

export default App;
