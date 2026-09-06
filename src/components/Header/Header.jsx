import React from "react";
import flowerImage from "./flower.png";
function Header() {
    return (
        <header className="header">
            <h1>אפליקציית הגינה שלי</h1>
            <img src={flowerImage} alt="flower" className="flower-image"  />
        </header>
    );
}

export default Header;