import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles]=useState([])

    useEffect(()=>{

        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data))

    },[])

    return (
        <div>
            <h2>Bottles here:{bottles.length}</h2>
          <div className="bottle-container">
          {
                bottles.map(pBottle=><Bottle key={pBottle.id} bottleInside={pBottle}></Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;