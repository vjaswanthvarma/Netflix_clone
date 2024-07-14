import React from "react"
import { useEffect } from "react";
export default function Orginals(){
    var[data,setdata]=React.useState();
    var Adata=["Adipurush.jpg","blackcrab.jpg","crowd.jpg","dog.jpg","RRR.jpg","gasthy.jpg","iceroad.jpg","matilda.jpg","morbius.jpg","spykids.jpg"]
    useEffect(()=>{
        const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd354d4bd4emshe0a1c93f2568d67p10feabjsn4e706dd7e870',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};
    //fetch(url, options).then((res)=>res.json()).then((dat)=>{setdata(dat.results)});
        
    },[])
    
    return(<>
       <div className="mt-12" id="orginals">
       <h1 className="text-white text-3xl my-5 ml-5 font-bold">Popular Orginals</h1>
       <div className="flex  flex-wrap justify-between gap-2">
       {Adata.map((dat)=>{
    return <img src={dat} className="w-[18%] h-64 my-2 mr-2 border rounded-xl shadow-2xl border-black ml-2 hover:w-[300px] hover:h-62" />
  
})}
        </div>
        </div>
    </>)
}