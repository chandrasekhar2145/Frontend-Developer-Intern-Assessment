import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter,Switch, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Assuming this is the name of your side navigation component
import PopulationGraph from './components/PopulationGraph'; // Assuming this is the name of your population graph component
import CryptoPrices from './components/CryptoPrices'; // Assuming this is the name of your cryptocurrency prices component
import MetaMaskIntegration from './components/MetaMaskIntegration'; // Assuming this is the name of your MetaMask integration component
import './App.css'; // Assuming you have your CSS file for styling


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" element={<h1>Home Page</h1>}>
          </Route>
          <Route path="/population" element={<PopulationGraph />}>
          </Route>
          <Route path="/cryptoprices" element={<CryptoPrices />}>
          </Route>
          <Route path="/connectwallet" element={<MetaMaskIntegration />}>   
          </Route>
        </Switch>
      </div>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
