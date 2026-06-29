import React from 'react';
import api from '../../services/api';

const ManageHotels = ({ hotels, onHotelDeleted }) => {
  
  const deleteHotel = async (id) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      try {
        await api.delete(`/hotels/${id}`);
        onHotelDeleted(id); // Notify parent
        alert('Hotel deleted');
      } catch (err) {
        alert('Failed to delete hotel');
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-bold mb-4">Manage Your Hotels</h3>
      <div className="space-y-4">
        {hotels.length === 0 ? (
          <p>You have not added any hotels yet.</p>
        ) : (
          hotels.map((hotel) => (
            <div key={hotel._id} className="flex justify-between items-center p-3 border rounded-md">
              <div>
                <h4 className="font-semibold">{hotel.name}</h4>
                <p className="text-sm text-gray-600">{hotel.destination}</p>
              </div>
              <div>
                {/* Note: Edit functionality would require a new form/modal */}
                <button 
                  onClick={() => deleteHotel(hotel._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageHotels;