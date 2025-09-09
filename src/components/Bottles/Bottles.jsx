import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles,setBottles] =useState([]);
    const [cart,setCart]= useState([]);


    useEffect ( () =>{
      fetch('bottles.json')  
      .then(res=> res.json())
      .then (data => setBottles(data));
    },[])


const handleAddToCard = bottle =>{
  // ... means coppy previes things
  const newCart=[...cart,bottle];
  setCart (newCart);
  
}
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <h4>Cart: {cart.length}</h4>
<h2>
   <div className="bottles-container">
     {
        bottles.map(bottle =><Bottle key={bottle.id}
          handleAddToCard ={handleAddToCard}
             bottle= {bottle} ></Bottle> )
    }
   </div>
</h2>

        </div>
    );
};

export default Bottles;