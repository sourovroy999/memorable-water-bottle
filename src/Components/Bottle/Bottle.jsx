import './Bottle.css'

const Bottle = ({bottleInside}) => {
    console.log(bottleInside);

    const{name, img, price}=bottleInside;
    
    return (
        <div className="bottle-class">
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;