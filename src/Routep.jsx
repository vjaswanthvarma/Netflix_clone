import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Search from "./Search";
import Movies from "./Movies"
export default function Routep(){
    return (<>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/search" element={<Search />} />
        </Routes>
    </BrowserRouter>
    </>)
}