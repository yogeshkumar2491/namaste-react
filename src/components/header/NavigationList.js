import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Offline from "../Offline";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const NavigationList = () => {
  const [btnName, setBtnName] = useState("Login"),
    onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //subscribing to the store using selector hook
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // if (onlineStatus === "offline") return <Offline />;
  return (
    <ul className="flex p-4 m-4">
      <li className="px-4">
        Online Status: {onlineStatus === "online" ? "🟢" : "🔴"}
      </li>
      <li className="px-4">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="px-4">
        <Link to="/about">About</Link>
      </li>
      <li className="px-4">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="px-4">
        <Link to="/grocery">Grocery</Link>
      </li>
      <li className="px-4 font-bold text-xl">
        <Link to="cart">Cart({cartItems.length} items)</Link>
      </li>
      <button
        className="login"
        onClick={() => {
          setBtnName(btnName === "Login" ? "Logout" : "Login");
        }}
      >
        {btnName}
      </button>
      <li className="px-4">{loggedInUser}</li>
    </ul>
  );
};

export default NavigationList;
