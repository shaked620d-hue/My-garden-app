import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {
  const flowersList = [
    {
      id: 1,
      flowerName: "שושן צחור",
      petalsColor: "Pink",
      centerPetalColor: "Yellow"
    },
    {
      id: 2,
      flowerName: "כלנית",
      petalsColor: "Red"
    },
    {
      id: 3,
      flowerName: "חמניה",
      centerPetalColor: "Brown"
    },
    {
      id: 4,
      flowerName: "חבצלת"
    }
  ];
  return (
    <div className="App">
      {/* הצגת הכותרת והפרח */}
      <Header />
  {flowersList.important || flowersList.map((flower) => (
    
    <Flower
      key={flower.id}
      flowerName={flower.flowerName}
      petalsColor={flower.petalsColor}
      centerPetalColor={flower.centerPetalColor}
    />
  ))}

    </div>
  );
}


export default App;