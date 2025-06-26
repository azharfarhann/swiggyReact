import React, { useState } from "react";
import Card from "../components/Card";
import data from "../utils/mockData.js";
// import "./Home.css"

const Home = () => {
  const [filteredData,setFiltereData] = useState(data);
  // sort data by cost low -> high
  function sortLowToHigh(){
    const copy = data.slice();  // -> no params given i.e Full Copy
    copy.sort((a,b) =>
    // substract the two costFortwo values
    a.card.card.info.costForTwo - b.card.card.info.costForTwo)
    setFiltereData(copy)
  } 

 // sort data by cost High -> Low
 function sortHighToLow(){
  const copy = data.slice()  // -> no params passed in slice() i.e output = Full Copy
  copy.sort((a,b)=>
    b.card.card.info.costForTwo - a.card.card.info.costForTwo
  );
  setFiltereData(copy);
 }

  // function topRated(){

  // }
  // function mediumRated(){

  // }
  // function avgRated(){

  // }
  //   let filteredData = data.filter(i => i.card.card.info.avgRating > 4)
  // console.log(filteredData)
 


  //   let opt = data.map(x => x.card.card.info.name)
  //   console.log(opt)

  return (
    <>
    <button className="bg-emerald-500 p-4 m-4 border border-emerald-500 rounded-lg cursor-pointer hover:border-4 hover:border-emerald-900 transition-all duration-150 ease-in-out" onClick={()=>(setFiltereData(data))}>
     Home
    </button>
    <button className="bg-orange-100 p-4 m-4 border rounded-lg cursor-pointer hover:font-semibold transition-all duration-300 ease-in-out" onClick={sortLowToHigh}>
     Sort: Cost Low → High
    </button>

    <button className="bg-lime-100 p-4 m-4 border rounded-lg cursor-pointer hover:font-semibold transition-all duration-300 ease-in-out " onClick={sortHighToLow}>
     Sort: Cost High → Low
    </button>
    
    
      <button
        className="bg-red-400 p-4 m-4 border-2 border-red-800 rounded-lg cursor-pointer hover:scale-105 "
        onClick={()=>setFiltereData(filteredData.filter(i=>i.card.card.info.avgRating > 4))}
      >
        Top Rated (4+)
      </button>
      <button
        className="bg-cyan-50 p-4 m-4 border rounded-lg cursor-pointer hover:scale-105"
        onClick={()=>setFiltereData(data.filter(i=>i.card.card.info.avgRating > 3.5))}
      >
        3.5+ Rated
      </button>
      <button
        className="bg-blue-50 p-4 m-4 border rounded-lg cursor-pointer hover:scale-105"
        onClick={()=>setFiltereData(data.filter(i=>i.card.card.info.avgRating > 3))}
      >
        3+ Rated
      </button>
      <button
        className="bg-red-50 p-4 m-4 border rounded-lg cursor-pointer hover:scale-105"
        onClick={()=>setFiltereData(data.filter(i=>i.card.card.info.avgRating > 2.5))}
      >
        2.5+ Rated
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
              price = {x.card.card.info.costForTwo}
              priceMsg = {x.card.card.info.costForTwoMessage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;



//  const [filteredData, setFiltereData] = useState(data);
//   function resFilter() {
//     const result = data.filter((i) => i.card.card.info.avgRating > 4);
//     setFiltereData(result);
//   }
//   function resFilter1() {
//     const result = data.filter((x) => {
//       const ratings = x.card.card.info.avgRating;
//       return ratings >= 3.5 && ratings <= 4;
//     });
//     setFiltereData(result);
//   }
//   function resFilter2() {
//     const result = data.filter((i) => i.card.card.info.avgRating > 3);
//     setFiltereData(result);
//   }
//   function resFilter3() {
//     const result = data.filter((i) => i.card.card.info.avgRating > 2.5);
//     setFiltereData(result);
//   }