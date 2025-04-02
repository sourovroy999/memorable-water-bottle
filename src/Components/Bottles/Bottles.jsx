import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles]=useState([])
    const[cart, setCart]=useState([])

    useEffect(()=>{

        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=> setBottles(data))

    },[])

    //load cart from local storage
    useEffect(()=>{
        console.log('called the use effect', bottles.length);
        
        if(bottles.length){
            const storedCart=getStoredCart();
             console.log(storedCart, bottles);

             const savedCart = [];

             for(const id of storedCart){
                console.log(id);
                const bottleFind= bottles.find(fBottle => fBottle.id === id)

                if (bottleFind) {
                    savedCart.push(bottleFind)
                }
                
             }
             console.log('Saved Cart', savedCart);
             setCart(savedCart)
             

        }
        
    } ,[bottles])

    const handleAddToCart= bottleParams =>{
        const newCart=[...cart, bottleParams]
        setCart(newCart)
        addToLS(bottleParams.id)
    }

    const handleRemoveFromCart = id =>{
        //remove from visual cart 
        const remainingCart= cart.filter( bottle => bottle.id !== id )
        setCart(remainingCart)

        //remove from local storage
        removeFromLS(id)
    }

    return (
        <div>
            <h2>Bottles Availble:{bottles.length}</h2>

           <Cart cartInside={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>





          <div className="bottle-container">
          {
                bottles.map(pBottle=>
                <Bottle key={pBottle.id}
                 bottleInside={pBottle}
                  handleAddToCart={handleAddToCart}>

                
                  </Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;