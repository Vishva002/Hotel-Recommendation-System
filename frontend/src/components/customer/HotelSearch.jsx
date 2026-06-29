import React, { useState } from 'react';

const HotelSearch = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        destination: '',
        minPrice: '',
        maxPrice: '',
        amenities: [],
        travelContext: [],
    });

    const amenitiesOptions = ['WiFi', 'Pool', 'Gym', 'Parking', 'AC', 'Pet Friendly'];
    const contextOptions = ['Business', 'Family', 'Romantic', 'Solo'];

    const onChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const onCheckboxChange = (e, type) => {
        const { value, checked } = e.target;
        let currentValues = [...filters[type]];

        if (checked) {
            currentValues.push(value);
        } else {
            currentValues = currentValues.filter((val) => val !== value);
        }
        setFilters({ ...filters, [type]: currentValues });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const query = {};
        if (filters.destination) query.destination = filters.destination;
        if (filters.minPrice) query.minPrice = filters.minPrice;
        if (filters.maxPrice) query.maxPrice = filters.maxPrice;
        if (filters.amenities.length > 0) query.amenities = filters.amenities.join(',');
        if (filters.travelContext.length > 0) query.travelContext = filters.travelContext.join(',');

        onSearch(query);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gray-100"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {/* Destination */}
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Destination</label>
                    <input
                        type="text"
                        name="destination"
                        placeholder="e.g., Paris"
                        value={filters.destination}
                        onChange={onChange}
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                {/* Price range */}
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Min Price</label>
                        <input
                            type="number"
                            name="minPrice"
                            placeholder="₹0"
                            value={filters.minPrice}
                            onChange={onChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Max Price</label>
                        <input
                            type="number"
                            name="maxPrice"
                            placeholder="₹500"
                            value={filters.maxPrice}
                            onChange={onChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Travel Context */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Travel Style</label>
                    <select
                        name="travelContext"
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                travelContext: e.target.value ? [e.target.value] : [],
                            })
                        }
                        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Any</option>
                        {contextOptions.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Amenities */}
            <div className="mt-4 border-t border-gray-200 pt-4">
                <span className="block text-sm font-semibold text-gray-700 mb-2">Amenities</span>
                <div className="flex flex-wrap gap-3">
                    {amenitiesOptions.map((item) => (
                        <label key={item} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={item}
                                onChange={(e) => onCheckboxChange(e, 'amenities')}
                                className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{item}</span>
                        </label>
                    ))}
                </div>
            </div>
        </form>

    );
};

export default HotelSearch;