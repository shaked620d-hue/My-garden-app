import react from "react";

function Flower(){
    const flowerName = "שושן צחור";
    const petalsColor = "Pink";
    const centerPetalColor = "Yellow";

    return(
        <div
        className = "flower-container"
        style={{
            backgroundColor: petalsColor,
            padding: '20px', 
        borderRadius: '12px',
        textAlign: 'center',
        margin: '20px auto',
        maxWidth: '300px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
        >
            <h2 style={{ color: centerPetalColor }}>{flowerName}</h2>

        </div>
    );


}
export default Flower;