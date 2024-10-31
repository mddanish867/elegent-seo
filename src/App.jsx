import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Layout from "./components/layout/Layout";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";
import ResetPasswordPage from "./components/auth/ResetPasswordPage";
import ServicePage from "./components/services/ServicePage";
import ContactPage from "./components/contacts/ContactPage";
import AboutPage from "./components/about/AboutPage";
import ScheduleConsultationPage from "./components/consultant/ScheduleConsultationPage";
import DiscoverMorePage from "./components/consultant/DiscoverMorePage";
import OurProcessPage from "./components/consultant/OurProcessPage";
import BeginJourneyPage from "./components/consultant/BeginJourneyPage";

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<ServicePage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/schedule-consulant" element={<ScheduleConsultationPage/>} />
      <Route path="/discover" element={<DiscoverMorePage/>} />
      <Route path="/process" element={<OurProcessPage/>} />
      <Route path="/journey" element={<BeginJourneyPage/>} />      
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />

      
      </Routes>
    </Router>
     </>
  )
}

export default App
