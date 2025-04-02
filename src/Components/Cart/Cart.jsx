import './Cart.css'

const Cart = ({cartInside, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cartInside.length}</h4>
            <div className="cart-container">
                {
                    cartInside.map(mBottle => 
                   <div>
                     <img key={mBottle.id} src={mBottle.img}></img>
                     <button onClick={()=>handleRemoveFromCart(mBottle.id)}>Remove</button>
                   </div>
                )
                }
            </div>
        </div>
    );
};

export default Cart;