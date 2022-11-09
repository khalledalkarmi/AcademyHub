import { Route, Routes } from "react-router-dom";
import FooterBar from "./component/Footer";
import NavBar from "./component/Nav";
import "./index.css"
import { Header } from "./Pages/Home/index";
import { LoginForm as Login } from "./Pages/Login/index";
import { SignupForm } from "./Pages/Signup/SignupForm";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignupForm/>} />
        {/* TODO: About us */}
      </Routes>
      <FooterBar/>
    </>
  );
}

export default App;
