import React from 'react';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  const { _id, name, destination, pricePerNight, imageUrl, amenities, travelContext } = hotel;

  const renderTag = (item, type) => {
    let colorClass = 'bg-gray-100 text-gray-700'; // default
    if (type === 'amenity') {
      if (['WiFi', 'Pool'].includes(item)) colorClass = 'bg-blue-100 text-blue-700';
      if (['Gym', 'Parking'].includes(item)) colorClass = 'bg-gray-100 text-gray-700';
    } else if (type === 'context') {
      if (item === 'Family') colorClass = 'bg-green-100 text-green-700';
      if (item === 'Romantic') colorClass = 'bg-pink-100 text-pink-700';
      if (item === 'Business') colorClass = 'bg-purple-100 text-purple-700'; 
    }
    
    return <span key={item} className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colorClass}`}>{item}</span>
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        
        {/* Location Icon + Text */}
        <div className="flex items-center text-gray-500 my-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1 text-gray-400">
              <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.1.4-.22.655-.36a6.56 6.56 0 0 0 1.37-1.111 16.822 16.822 0 0 0 2.22-3.11c.475-1.03.771-2.11.771-3.191C15.63 4.54 13.17 1 10 1S4.37 4.54 4.37 8.132c0 1.08.296 2.161.77 3.191.68 1.48 1.444 2.453 2.22 3.11a6.56 6.56 0 0 0 1.37 1.112c.255.14.47.26.656.36a5.741 5.741 0 0 0 .28.14l.018.008.006.003ZM10 11.25a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z" clip-rule="evenodd" />
            </svg>
            <span className="text-sm">{destination}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 my-3">
           {amenities.slice(0, 2).map(item => renderTag(item, 'amenity'))}
           {travelContext.slice(0, 1).map(item => renderTag(item, 'context'))}
        </div>
        
        {/* Price and Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-gray-800">₹{pricePerNight}
            <span className="text-sm font-normal text-gray-500"> / night</span>
          </p>
          <Link
            to={`/hotel/${_id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;