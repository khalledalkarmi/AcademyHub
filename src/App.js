import { Route, Routes } from "react-router-dom";
import FooterBar from "./component/Footer";
import NavBar from "./component/Nav";
import "./index.css"
import { AboutUs } from "./Pages/AboutUs";
import { Header } from "./Pages/Home/index";
import { LoginForm as Login } from "./Pages/Login/index";
import { MainPage } from "./Pages/MainPage";
import { SignupForm } from "./Pages/Signup/SignupForm";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/main" element={<MainPage />} />
        {/* TODO: Main Page */}
      </Routes>
      <FooterBar />
    </>
  );
}

export default App;
