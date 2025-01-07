import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, description, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} description={description} />}
      <div className="grid grid-cols-2 gap-10 mt-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 uppercase">
            Order Your Favoruite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
