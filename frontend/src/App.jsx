import { useState } from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Errorpage from "./pages/404";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/sign-up" element={<Register/>} />
        <Route path="/sign-in" element={<Login/>} />
        <Route path="*" element={<Errorpage/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
