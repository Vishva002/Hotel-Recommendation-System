import React from 'react';
import HotelCard from './HotelCard';
import Spinner from '../layout/Spinner';

const HotelList = ({ hotels, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  if (hotels.length === 0) {
    return (
      <p className="text-center text-gray-600 text-lg mt-10">
        No hotels found matching your criteria 😔
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {hotels.map((hotel) => (
        <HotelCard key={hotel._id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
