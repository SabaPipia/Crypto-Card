import user from "../../img/image-avatar.png";
import "./style.scss";

type userName = {
  name: string;
};

const User = (props: userName) => {
  return (
    <div className="user">
      <img src={user} alt="user-avatar" />
      <h3>
        Creation of <span>{props.name}</span>
      </h3>
    </div>
  );
};

export default User;
