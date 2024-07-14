import React from "react"
import Header from "./Header"
import Shows from "./Shows"
import Movies from "./Movies"
import Orginals from "./Orginals"
import MovieCard from "./MovieCard"
import More from "./More"
import Search from "./Search"
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home(){
    useEffect(()=>{
        toast.success('Lets Welcome', {
            position: "top-center",
            autoClose:3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    })
    return(<>
    <div className="bg-black">
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    <Header />
    <MovieCard />
    <Orginals />
    <Movies />
    <Shows />
    <More />
    <img src="footer.jpg" />
    </div>
    </>)
}