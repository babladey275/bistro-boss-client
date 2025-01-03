import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section className="max-w-6xl mx-auto mb-20">
        <Category></Category>
      </section>
    </div>
  );
};

export default Home;
