import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AddHotel from './AddHotel';
import ManageHotels from './ManageHotels';
import api from '../../services/api';
import Spinner from '../layout/Spinner';

const DealerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDealerHotels = async () => {
    setLoading(true);
    try {
      // We can't query by dealer ID directly from the "getHotels" route
      // A better backend would have a GET /api/hotels/myhotels route
      // For simplicity, we filter on the frontend
      const res = await api.get('/hotels');
      const myHotels = res.data.data.filter(hotel => hotel.dealer === user.id);
      setHotels(myHotels);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user) {
      fetchDealerHotels();
    }
  }, [user]);

  const onHotelAdded = (newHotel) => {
    setHotels([...hotels, newHotel]);
  };
  
  const onHotelDeleted = (deletedHotelId) => {
    setHotels(hotels.filter(hotel => hotel._id !== deletedHotelId));
  }

  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <AddHotel onHotelAdded={onHotelAdded} />
      </div>
      <div className="lg:col-span-2">
        <ManageHotels hotels={hotels} onHotelDeleted={onHotelDeleted} />
      </div>
    </div>
  );
};

export default DealerDashboard;