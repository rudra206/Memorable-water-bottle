import './Bottle.css'
const Bottle = ({bottle}) => {
    return (
        <div className="bottle">
            <p>Id: {bottle.id}</p>
            <h3>Bottle : {bottle.name} </h3>
            <img src={bottle.imageUrl} />
            <p>Price: ${bottle.price}</p>
            <p>Stock: {bottle.stock}</p>
            <p>Size: {bottle.size}</p>


        </div>
    );
};

export default Bottle;