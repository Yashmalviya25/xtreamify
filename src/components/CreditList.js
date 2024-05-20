import React, { useState, useEffect } from "react";
import CreditCard from "./CreditCard";
import { API_OPTIONS, GET_MOVIE_CREDIT } from "../utils/constants";

const CreditList = ({ creditId }) => {
  const [credits, setCredits] = useState([]);
  const getCreditAsync = async () => {
    try {
      const formattedMessage = GET_MOVIE_CREDIT.replace("{id}", creditId);
      const data = await fetch(formattedMessage, API_OPTIONS);
      const json = await data.json();
      console.log(json);
      const cast = json?.cast;
      if (cast) {
        setCredits(cast);
      } else {
        console.error("No cast data found in the API response.");
      }
    } catch (error) {
      console.error("Error fetching casts:", error);
    }
  };
  useEffect(() => {
    getCreditAsync();
  }, []);
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl text-white py-4">CAST</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {credits && credits.map((credit) => <CreditCard key={credit.cast_id} credit={credit} />)}
        </div>
      </div>
    </div>
  );
};

export default CreditList;
