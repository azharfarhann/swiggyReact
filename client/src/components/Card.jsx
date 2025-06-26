import React from "react";
// import biryani from "../assets/download.jpg"
// import "./Card.css";

const Card = (content) => {
  // => (content) is coming from calling params i.e content is a variable containing object . you can clg data and see its type i.e let content = {name="a", area="hyd", etc} which is passed in home.jsx <card/> line ...10481 in card.jsx file

  let { fname, area, cost, ratings, image, price, priceMsg } = content; // Object Destructuring when key name is same . you can replace this in line 6 , ({fname,area}) = content , so replace content & directly pass object params as ({fname,area}).
  let imgUrl = `
https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${image}`;

  return (
    <>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300">
        <img
          className="w-full h-40 object-cover rounded-t-xl"
          src={imgUrl} // called from line 9. Dynamic Images of biryani will be displayed  
          alt="biryani img"
        />
        
        <div className="p-4">
          {/* <h1>{content.name}</h1>   */}
          {/*  1st option. changing {content.name} to {content.fname} from home.jsx key of <Card/> below*/}
          {/* <h1>{content.fname}</h1> */}
          {/* or 2nd. finally we can do it below like this by only using object destructuring*/}
          <h2 className="text-lg font-semibold">{fname}</h2>

          {/* <h1>{content.city}</h1>  */}
          {/*1st. changing {content.city} to {content.area}from home.jsx key of <Card/> below */}
          {/* <h1>{content.area}</h1> */}
          {/* or 2nd. finally we can do it below like this, by only using object destructuring */}
          <p className="text-sm text-gray-600">{area}</p>
          <div className="text-sm mt-2 flex flex-wrap justify-between text-gray-700">
            <span>{cost}</span>
            <span>{ratings}</span>
            <span>{price}</span>
            <span>{priceMsg}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
