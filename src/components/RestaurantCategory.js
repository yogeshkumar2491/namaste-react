import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const itemCards = data?.itemCards;
  console.log(setShowIndex);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg text p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({itemCards?.length})
          </span>
          <span> ⬇️ </span>
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
