import React from "react"
import { useEffect } from "react";
export default function Movies(){
    var[data,setdata]=React.useState([]);
    useEffect(()=>{
        const url = 'https://moviesdatabase.p.rapidapi.com/titles';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd354d4bd4emshe0a1c93f2568d67p10feabjsn4e706dd7e870',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};
   fetch(url, options).then((res)=>res.json()).then((dat)=>{setdata(dat.results)});
},[])
    return(<>
    <div className="mt-12" id="movies">
    <h1 className="text-white text-3xl mb-10 ml-12 font-bold">Popular Movies</h1>
    <div className="flex flex-wrap justify-between gap-2">
    {data.map((dat)=>{
    var image=dat.primaryImage && dat.primaryImage.url? dat.primaryImage.url : 'iceroad.jpg';
    return <img src={image} className="w-[18%] h-64 my-2 border rounded-xl shadow-2xl border-black ml-2 hover:w-[400px] hover:h-62" />
  
})}
        </div>

    </div>
    </>)
}