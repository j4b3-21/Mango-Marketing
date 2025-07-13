import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <div className={"bg-[#FFF2EB] h-screen w-screen overflow-x-hidden"}>
            <Navbar></Navbar>
            <hr className="mx-4 pb-4"/>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </div>
    );
};

export default App;
