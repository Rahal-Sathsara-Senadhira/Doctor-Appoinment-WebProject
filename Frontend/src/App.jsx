import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppoinments from "./pages/MyAppoinments";
import Doctors from "./pages/Doctors";
import Appoinment from "./pages/Appoinment";


function App() {


  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/myprofile" element={<MyProfile/>}/>
        <Route path="/myappoinments" element={<MyAppoinments/>}/>
        <Route path="/appoinment/:docId" element={<Appoinment/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
      </Routes>
    </div>
  );
}

export default App;
