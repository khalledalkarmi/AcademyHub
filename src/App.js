import { Route, Routes } from "react-router-dom";
import FooterBar from "./component/Footer";
import "./index.css"
import { AboutUs } from "./Pages/AboutUs";
import { Header } from "./Pages/Home/index";
import  SignIn from "./Pages/Login/Login";
import { MainPage } from "./Pages/MainPage";
import { SignupForm } from "./Pages/Signup/SignupForm";
import { gapi } from 'gapi-script';
import { useEffect } from "react";
const clientId =  '76710521547-nbakpmr8qmrvj6gt2rhu7nhd75dg6ahr.apps.googleusercontent.com'

function App() {
  useEffect(()=>{
    function start(params) {
      gapi.client.init({
        clientId: clientId,
        scope:''
      })
    }
    gapi.load('client:auth2',start)
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<SignIn />} />
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
