import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Errorpage from "./pages/404";
import AdminLayount from "./components/Layout/Admin-Layount";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import EditUser from "./pages/EditUser";
import EditContacts from "./pages/EditContacts";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/admin" element={<AdminLayount />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="user/:id/edit" element={<EditUser />} />
          <Route path="contact/:id/edit" element={<EditContacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
