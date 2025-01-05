import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, description, img }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title} description={description} />}
      <div className="grid grid-cols-2 gap-10 my-20">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
