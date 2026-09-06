import react from "react";

function Flower() {
    const flowerName = "שושן צחור";
    const petalsColor = "Pink";
    const centerPetalColor = "Yellow";


    // הגדרות CSS לעלה כותרת בודד (בצורת דמעה/לב מעוגל)
    const petalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "50px",
        height: "70px",
        backgroundColor: petalsColor, // צבע עלי הכותרת
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", // צורת עלה כותרת
        transformOrigin: "50% 100%", // נקודת הסיבוב היא בתחתית העלה
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    };

    return (
        <div style={{ textAlign: 'center', margin: '60px auto',position: "relative" }}>
            { /* כותרת עם שם הפרח וצבע הכתב לפי העלה המרכזי */}
            <h2 style={{ color: centerPetalColor, marginBottom: '40px',position: "relative",zIndex: 2 }}>{flowerName}</h2>

            { /* קונטיינר מעוצב לפרח המורכב מעלי כותרת ומרכז */}
            <div
                className="flower-shape"
                style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                    margin: "0 auto",
                }}
            >
                {/* יצירת 5 עלי כותרת מסובבים */}
                {/* כל עלה כותרת ממוקם במרכז ומסובב בזווית שונה */}
                <div style={{ ...petalStyle, transform: "translate(-50%, -50%) rotate(0deg)" }} />
                <div style={{ ...petalStyle, transform: "translate(-50%, -50%) rotate(72deg)" }} />
                <div style={{ ...petalStyle, transform: "translate(-50%, -50%) rotate(144deg)" }} />
                <div style={{ ...petalStyle, transform: "translate(-50%, -50%) rotate(216deg)" }} />
                <div style={{ ...petalStyle, transform: "translate(-50%, -50%) rotate(288deg)" }} />
              
                { /* מרכז הפרח */}                <div
                    style={{
                        position: "absolute",
                        top: "81%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "40px",
                        height: "40px",
                        backgroundColor: centerPetalColor, // צבע העלה המרכזי
                        borderRadius: "50%",
                        zIndex: 3
                    }}
                />
            </div>
        </div>
    );


}
export default Flower;