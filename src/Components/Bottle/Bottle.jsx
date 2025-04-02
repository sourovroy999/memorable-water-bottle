
const Bottle = ({bottleInside}) => {
    console.log(bottleInside);

    const{name, img, price}=bottleInside;
    
    return (
        <div>
            <h3>Bottle: {name}</h3>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;