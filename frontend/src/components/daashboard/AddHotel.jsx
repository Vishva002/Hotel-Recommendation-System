import React, { useState } from 'react';
import api from '../../services/api';

const AddHotel = ({ onHotelAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    description: '',
    pricePerNight: '',
    imageUrl: '',
    amenities: [],
    travelContext: [],
  });

  const { name, destination, description, pricePerNight, imageUrl } = formData;
  const amenitiesOptions = ['WiFi', 'Pool', 'Gym', 'Parking', 'AC', 'Pet Friendly'];
  const contextOptions = ['Business', 'Family', 'Romantic', 'Solo'];

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    let currentValues = [...formData[type]];
    if (checked) currentValues.push(value);
    else currentValues = currentValues.filter((val) => val !== value);
    setFormData({ ...formData, [type]: currentValues });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/hotels', formData);
      onHotelAdded(res.data.data); // Notify parent
      // Reset form
      setFormData({ 
        name: '', destination: '', description: '', pricePerNight: '', imageUrl: '', 
        amenities: [], travelContext: [] 
      });
      alert('Hotel added successfully!');
    } catch (err) {
      alert('Failed to add hotel: ' + err.response.data.msg);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-bold mb-4">Add a New Hotel</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Hotel Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required className="mt-1 w-full rounded-md border-gray-300"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Destination</label>
          <input type="text" name="destination" value={destination} onChange={onChange} required className="mt-1 w-full rounded-md border-gray-300"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea name="description" value={description} onChange={onChange} required className="mt-1 w-full rounded-md border-gray-300"/>
        </div>
        <div>
          <label className="block text-sm font-medium">Price per Night ($)</label>
          <input type="number" name="pricePerNight" value={pricePerNight} onChange={onChange} required className="mt-1 w-full rounded-md border-gray-300"/>
        </div>
         <div>
          <label className="block text-sm font-medium">Image URL</label>
          <input type="text" name="imageUrl" value={imageUrl} onChange={onChange} className="mt-1 w-full rounded-md border-gray-300" placeholder="https://..."/>
        </div>

        {/* Checkboxes for Amenities */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Amenities</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {amenitiesOptions.map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input type="checkbox" value={item} onChange={(e) => onCheckboxChange(e, 'amenities')} className="rounded"/>
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Checkboxes for Travel Context */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Travel Context</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {contextOptions.map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input type="checkbox" value={item} onChange={(e) => onCheckboxChange(e, 'travelContext')} className="rounded"/>
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold">
          Add Hotel
        </button>
      </form>
    </div>
  );
};

export default AddHotel;