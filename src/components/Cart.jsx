export default function Cart({data}){
    return <div className="cart">
        <img className="cartImage" src={data.image} alt={data.description}/>
        <h3 className="cartTitle">Add to {data.text}</h3>
        <p className="text cartText">Minimum version {data.version}</p>
        <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
        <button className="cartButton">Add & Install Extension</button>
    </div>
}