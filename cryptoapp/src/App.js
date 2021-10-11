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
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
  
      </header>
      <Home/>
    </div>
  );
}

export default App;
