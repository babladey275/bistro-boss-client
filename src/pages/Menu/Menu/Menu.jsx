import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuImg}
        title={"Our Menu"}
        description={"WOULD YOU LIKE TO TRY A DISH?"}
      />

      {/* offered menu */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      <MenuCategory items={offered} />

      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        img={dessertImg}
        title={"dessert"}
        description={
          "Indulge in sweet and delicious treats to end your meal. Our desserts are crafted to satisfy your cravings."
        }
      />

      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        img={pizzaImg}
        title={"pizza"}
        description={
          "Savor the best pizzas, baked to perfection. Whether you prefer classic or unique toppings, we have something for everyone."
        }
      />

      {/* salads menu item */}
      <MenuCategory
        items={salads}
        img={saladImg}
        title={"salad"}
        description={
          "Fresh, crunchy, and healthy options for every taste. Enjoy a refreshing salad as a light meal or a perfect side."
        }
      />

      {/* soup menu items */}
      <MenuCategory
        items={soups}
        img={soupImg}
        title={"soup"}
        description={
          "Warm and comforting soups, perfect for any season. Our soups are rich in flavor and made with the freshest ingredients."
        }
      />
    </div>
  );
};

export default Menu;
