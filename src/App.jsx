import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* הצגת הכותרת והפרח */}
      <Header />
      <Flower
        flowerName="שושן צחור"
        petalsColor="Pink"
        centerPetalColor="Yellow"
      />
      {/*שם וצבע עלי כותרת*/}
      <Flower
        flowerName="כלנית"
        petalsColor="Red"
      />
      {/*שם וצבע עלה מרכזי*/}
      <Flower
        flowerName="חמניה"
        centerPetalColor="Brown"
      />
      <Flower
        flowerName="חבצלת" />

    </div>
  );
}


export default App;