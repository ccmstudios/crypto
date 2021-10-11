import logo from './assets/images/bitcoin.png';
import './App.css';
import Home from './pages/home/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='banner'className="card bg-dark text-white">
  <img src={logo} className="card-img" id='App-logo' alt="..."/>
  <div className="card-img-overlay">
    <h1 className="card-title">CRYPTOVANIA</h1>
  </div>
</div>
  
      </header>
      <Home/>
    </div>
  );
}

export default App;
