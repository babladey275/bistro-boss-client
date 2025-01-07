import React, { useState } from "react";
import orderCover from "../../../assets/order/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"Order Food"}
        description={"WOULD YOU LIKE TO TRY A DISH?"}
      />
      <div className="max-w-6xl mx-auto text-center my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
