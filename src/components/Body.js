// import mockData from "../utils/mockData.json";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState } from "react";
import useFetchListOfRestaurant from "../utils/useFetchListOfRestaurnat";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant } =
      useFetchListOfRestaurant(),
    [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="search..."
            onChange={(event) => {
              setSearchText(event.target.value);
              setFilteredRestaurant(
                listOfRestaurants.filter((e) =>
                  e.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
            value={searchText}
          />
        </div>
        <div className="m-4 p-4">
          <button
            className="rounded-lg px-2 py-0.5 bg-gray-100"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurants.filter(
                  (element) => element.info.avgRating > 4.5
                )
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="m-4 p-4">
          <label className="m-2">UserName:</label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurent) => (
          <Link
            key={restaurent?.info?.id}
            to={"/restaurent/" + restaurent?.info?.id}
          >
            {restaurent.info.id % 2 !== 0 ? (
              <RestaurantCardPromoted restData={restaurent?.info} />
            ) : (
              <RestaurantCard restData={restaurent?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
