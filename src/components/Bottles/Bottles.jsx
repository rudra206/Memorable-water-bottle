import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
const Bottles = () => {
    const [bottles,setBottles] =useState([]);

    useEffect ( () =>{
      fetch('bottles.json')  
      .then(res=> res.json())
      .then (data => setBottles(data));
    },[])

    return (
        <div>
            <h3>Bottles here: {bottles.length}</h3>
<h2>
   <div className="bottles-container">
     {
        bottles.map(bottle =><Bottle key={bottle.id}
             bottle= {bottle} ></Bottle> )
    }
   </div>
</h2>

        </div>
    );
};

export default Bottles;