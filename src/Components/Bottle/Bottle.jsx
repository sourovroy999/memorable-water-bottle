import './Bottle.css'

const Bottle = ({bottleInside, handleAddToCart}) => {
    // console.log(bottleInside);

    const{name, img, price}=bottleInside;
    
    return (
        <div className="bottle-class">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(bottleInside)}>Purchase</button>
        </div>
    );
};

export default Bottle;