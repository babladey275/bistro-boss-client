import React from "react";

const MenuItem = ({ item }) => {
  const { image, name, category, recipe, price } = item;

  return (
    <div className="flex">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-28"
        src={image}
        alt=""
      />
      <div className="ml-6">
        <h3 className="uppercase text-xl">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
