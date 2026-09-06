import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* הצגת הכותרת והפרח */}
      <Header />
      <Flower />
    </div>
  );
}

export default App;