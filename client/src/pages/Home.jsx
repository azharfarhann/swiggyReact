import React, { useState } from "react";
import Card from "../components/Card";
import data from "../utils/mockData.js";

const Home = () => {
  const [items, setItems] = useState(data);

  const reset = () => setItems(data);
  const sortLowToHigh = () => {
    const sorted = [...data].sort((a, b) =>
      a.card.card.info.costForTwo - b.card.card.info.costForTwo
    );
    setItems(sorted);
  };
  const sortHighToLow = () => {
    const sorted = [...data].sort((a, b) =>
      b.card.card.info.costForTwo - a.card.card.info.costForTwo
    );
    setItems(sorted);
  };
  const filterByRating = (min) => {
    setItems(data.filter(x => x.card.card.info.avgRating >= min));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Controls */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button onClick={reset} className="px-3 py-2 bg-green-500 text-white rounded">
            Home
          </button>
          <button onClick={sortLowToHigh} className="px-3 py-2 bg-blue-200 rounded">
            Cost Low → High
          </button>
          <button onClick={sortHighToLow} className="px-3 py-2 bg-blue-200 rounded">
            Cost High → Low
          </button>
          <button onClick={() => filterByRating(4)} className="px-3 py-2 bg-yellow-200 rounded">
            4+ Rating
          </button>
          <button onClick={() => filterByRating(3.5)} className="px-3 py-2 bg-yellow-200 rounded">
            3.5+ Rating
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((x, i) => (
            <Card
              key={i}
              fname={x.card.card.info.name}
              area={x.card.card.info.address}
              image={x.card.card.info.cloudinaryImageId}
              price={x.card.card.info.costForTwo}
              rating={x.card.card.info.avgRating}
              priceMsg={x.card.card.info.costForTwoMessage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
