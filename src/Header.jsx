import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Header(){
    var[data,setData]=React.useState();
    var nav=useNavigate();
    return(<>
        <div className="flex gap-96 py-4 bg-gray-800 border border-black shadow-2xl rounded-lg">
        <div className="flex justify-between mt-1">
            <img src="netflixlogo.jpg" className="w-20 h-10"/>
            <Link className=" text-2xl text-white mx-3 hover:underline hover:decoration-red-500 hover:bg-red-500 border rounded-lg border-none" to="/home">Home</Link>
            <a className=" text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none" href="#tvshows">TvShows</a>
            <a className="text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none" href="#movies">Movies</a>
            <a className=" text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none" href="#orginals">Orginals</a>
            <a className="text-2xl text-white mr-3 hover:underline  hover:decoration-red-500  hover:bg-red-500 border rounded-lg border-none" href="#other">More</a>
            </div>
        <div className="flex justify-between">
            <div className="flex gap-2">
                <input type="text" onChange={(e)=>{setData(e.target.value)}} className="border border-white w-[350px] rounded-md bg-black h-10 mt-1 py-5 px-2 hover:text-xl hover:text-white text-white" placeholder="Search" />
            <button className="w-16 mr-5 text-3xl ml-5 text-white hover:text-4xl  hover:bg-red-500 border rounded-lg border-none pl-3" onClick={()=>{nav("/search",{state:data}) }}><FaSearch /></button>
            </div>
            <button className="flex  text-4xl mt-2 mr-16 ml-36 text-white hover:underline  hover:bg-red-500 border rounded-lg border-none"><FaUser /></button>
            <button onClick={()=>{ nav("/",{state:"true"})}} className="text-5xl ml-36 text-white hover:underline hover:text-5xl  hover:bg-red-500 border rounded-lg border-none"  ><CiLogout /></button>  
        </div>
        </div>
    </>)
}