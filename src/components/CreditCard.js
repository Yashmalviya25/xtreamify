import React from 'react';
import { IMAGE_CDN_URL } from '../utils/constants';

const CreditCard = ({ credit }) => {
  if (!credit.profile_path) return null;
  return (
    <div className="relative w-48 pr-4 overflow-hidden group">
      <div className="absolute top-0 left-0 w-full bg-black bg-opacity-70 text-white text-center py-1 z-10">
        {credit.name}
      </div>
      <img
        src={IMAGE_CDN_URL + credit.profile_path}
        alt="card"
        className="transition-transform duration-300 transform-gpu group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </div>
  );
}

export default CreditCard;

