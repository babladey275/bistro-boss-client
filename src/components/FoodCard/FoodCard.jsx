import React from "react";

const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="food image" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;