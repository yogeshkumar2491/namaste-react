import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import NavigationList from "./NavigationList";

export const Header = () => {
  //if no dependency array ==> useEffect is called on every render
  //if dependency array is empty[] ==> useEffect is called on initial render(just once)
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnName]);

  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="logo-container">
        <Link to="/">
          <img className="w-36" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <NavigationList />
      </div>
    </div>
  );
};

export default Header;
