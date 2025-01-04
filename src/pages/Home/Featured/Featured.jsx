import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mb-20">
      <div className="bg-black bg-opacity-50 pt-12">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center pb-20 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p className="text-lg">Jan 04, 2025</p>
            <p className="uppercase font-semibold text-lg">
              Where can i get some?
            </p>
            <p>
              Indulge in our chef's special of the day, made with fresh,
              locally-sourced ingredients. Whether you're craving a savory
              delight or something sweet, we have something for every palate.
              Come join us for an unforgettable dining experience!
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white uppercase">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
