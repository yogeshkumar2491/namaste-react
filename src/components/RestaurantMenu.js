import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams(),
    resInfo = useRestaurantMenu(resId),
    [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info,
    { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
        ?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          index={index}
          setShowIndex={() =>
            showIndex === index ? setShowIndex(null) : setShowIndex(index)
          }
        />
      ))}
      <RestaurantCategory />
    </div>
  );
};

export default RestaurantMenu;
