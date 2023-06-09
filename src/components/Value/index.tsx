import icon from "../../img/icon-ethereum.svg";
import clock from "../../img/icon-clock.svg";
import "./style.scss";

type value = {
  price: number;
  days: number;
};

const Value = (props: value) => {
  return (
    <div className="value">
      <div className="price">
        <img src={icon} alt="crypto-icon" />
        <h6>{props.price} ETH</h6>
      </div>
      <div className="time">
        <img src={clock} alt="clock" />
        <h6>{props.days} days left</h6>
      </div>
    </div>
  );
};

export default Value;
