import { useState } from 'react';

const LocationForm = () => {
  const [location, setLocation] = useState('');

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Ubicación del Puente</h2>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Ej: Av. Arequipa cdra. 12, Lince"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default LocationForm;

// DONE