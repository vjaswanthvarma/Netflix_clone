import React from "react"
import { useEffect } from "react";
export default function Shows(){
    var[data,setdata]=React.useState([]);
    useEffect(()=>{
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd354d4bd4emshe0a1c93f2568d67p10feabjsn4e706dd7e870',
                'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
            }
        };
        fetch(url, options).then((res)=>res.json()).then((dat)=>{setdata(dat.results)});
},[]);
console.log(data)
    return(<>
            <div className="mt-12" id="tvshows">
            <h1 className="text-white text-3xl my-5 ml-5 font-bold">Popular Shows</h1>
            <div className="flex flex-wrap justify-between gap-2">
            {data.map((dat)=>{
    var image=dat.primaryImage && dat.primaryImage.url? dat.primaryImage.url : 'dog.jpg';
    return <img src={image} className="w-[18%] h-64 my-2 border rounded-xl shadow-2xl border-black ml-2 hover:w-[400px] hover:h-62" />
  
})}
        </div>
    </div>
    </>)
}