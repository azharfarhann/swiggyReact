import React, { useState } from "react";
import Card from "../components/Card";
import data from "../utils/mockDetails.js";
// import "./Home.css"

const Home = () => {
  //   let filteredData = data.filter(i => i.card.card.info.avgRating > 4)
  // console.log(filteredData)
  const [filteredData, setFiltereData] = useState(data);
  function resFilter() {
    const result = data.filter((i) => i.card.card.info.avgRating > 4);
    setFiltereData(result);
  }
  function resFilter1() {
    const result = data.filter((x) => {
      const ratings = x.card.card.info.avgRating;
      return ratings >= 3.5 && ratings <= 4;
    });
    setFiltereData(result);
  }
  function resFilter2() {
    const result = data.filter((i) => i.card.card.info.avgRating > 3);
    setFiltereData(result);
  }
  function resFilter3() {
    const result = data.filter((i) => i.card.card.info.avgRating > 2.5);
    setFiltereData(result);
  }
  

  //   let opt = data.map(x => x.card.card.info.name)
  //   console.log(opt)

  return (
    <>
      <button
        className="bg-gray-50 p-4 m-4 border rounded-lg cursor-pointer"
        onClick={resFilter}
      >
        Top Rated
      </button>
      <button
        className="bg-cyan-50 p-4 m-4 border rounded-lg cursor-pointer"
        onClick={resFilter1}
      >
        3.5 Rated
      </button>
      <button
        className="bg-blue-50 p-4 m-4 border rounded-lg cursor-pointer"
        onClick={resFilter2}
      >
        3 Rated
      </button>
      <button
        className="bg-red-50 p-4 m-4 border rounded-lg cursor-pointer"
        onClick={resFilter3}
      >
        2.5 Rated
      </button>
      <div className="body min-h-screen bg-gray-50 p-4">
        {/* Search Bar */}
        <div className="search mb-6 max-w-xl mx-auto ">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Restaurant Cards Grid */}
        <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 overflow-y-auto max-h-[100vh] px-2">
          {/* <Card name="a" city="hyd"/>
            <Card name="b"city="hyd"/>
            <Card name="c"city="hyd"/>  */}
          {/* OR HERE ABOVE WE DONT WANNA PASS THIS DATA 1000 TIMES , SO COMMENT ABOVE AND IMPLEMENT MAP TO data VARIABLE FROM LINE 6. TO RENDER it FOR A DYNAMIC APPROACH, output rendered for each attribute = ALL ARRAY.length   */}
          {filteredData.map((x, index) => (
            <Card
              key={index}
              fname={x.card.card.info.name}
              area={x.card.card.info.address}
              image={x.card.card.info.cloudinaryImageId}
              cost={x.card.card.info.costForTwo}
              ratings={x.card.card.info.avgRating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
