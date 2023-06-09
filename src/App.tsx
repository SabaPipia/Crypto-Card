import React from "react";
import "./App.scss";
import cryptologo from "./img/image-equilibrium.jpg";
import CryptoInfo from "./components/CryptoInfo/";
import { CryptoName } from "./Models/";

function App() {
  const CryptoN = [new CryptoName("Equilibrium", 3429)];

  return (
    <div className="card">
      <div className="container">
        <div className="img">
          <img className="cryptologo" src={cryptologo} alt="crypto-icon" />
        </div>
        <CryptoInfo info={CryptoN} />
      </div>
    </div>
  );
}
export default App;
