import Value from "../Value";
import User from "../User";
import { CryptoName } from "../../Models";
import "./style.scss";
import React from "react";

const CryptoInfo: React.FC<{ info: CryptoName[] }> = (props) => {
  return (
    <div className="cryptoInfo">
      {props.info.map((item) => (
        <h1 key={item.id}>
          {item.name} #{item.id}
        </h1>
      ))}
      <p>Our Equilibrium collection promotes balance and calm</p>
      <Value price={0.041} days={3} />
      <hr />
      <User name="Jules Wyvern" />
    </div>
  );
};

export default CryptoInfo;
