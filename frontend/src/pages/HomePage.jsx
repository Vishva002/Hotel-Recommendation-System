import React, { useState, useEffect } from 'react';
import HotelSearch from '../components/customer/HotelSearch';
import HotelList from '../components/customer/HotelList';
import api from '../services/api';
import Footer from './Footer';

const HomePage = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = async (searchQuery = {}) => {
    setLoading(true);
    try {
      const res = await api.get('/hotels', { params: searchQuery });
      console.log("Hotels:: ",res.data.data);
      setHotels(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Load all hotels on initial render
  useEffect(() => {
    fetchHotels();
  }, []);

  const handleSearch = (query) => {
    fetchHotels(query);
  };

  return (
    <div className="w-full">
      {/* ===== Hero Section ===== */}
      <div className="relative h-[400px] md:h-[500px] w-full -mt-4 md:-mt-8">
        {/* Background */}
        <img
          src="https://placehold.co/1600x600/60A5FA/FFF?text=Beautiful+Destination"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 drop-shadow-lg">
            Find Your Next Perfect Stay
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Search deals on hotels, homes, and much more...
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px] ...">
  
  <div className="relative z-20 container mx-auto -mt-32 px-4">
    <HotelSearch onSearch={handleSearch} />
  </div>

</div>
      </div>


      {/* ===== HotelList Section ===== */}
      <div className="container mx-auto p-4 md:p-8 mt-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Recommendations For You
        </h3>
        <HotelList hotels={hotels} loading={loading} />
      </div>
      
      <Footer/>
    </div>
  );
};

export default HomePage;