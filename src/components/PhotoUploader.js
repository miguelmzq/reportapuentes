import { useState } from 'react';

const PhotoUploader = () => {
  const [photos, setPhotos] = useState([]);
  const MAX_PHOTOS = 5;

  const handlePhotoChange = (e) => {
    const newPhotos = Array.from(e.target.files)
      .filter(file => file.type.match('image.*'))
      .slice(0, MAX_PHOTOS - photos.length);

    if (newPhotos.length) {
      setPhotos(prev => [...prev, ...newPhotos]);
    } else {
      alert(`Máximo ${MAX_PHOTOS} fotos permitidas`);
    }
  };

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Fotos del problema (máx. {MAX_PHOTOS})
      </h2>
      
      <div className="flex flex-wrap gap-3 mb-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={URL.createObjectURL(photo)}
              alt={`Foto ${index + 1}`}
              className="w-20 h-20 object-cover rounded-lg border border-gray-200"
            />
            <button
              onClick={() => removePhoto(index)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <label className="block w-full p-8 text-center bg-blue-50 hover:bg-blue-100 border-2 border-dashed border-blue-300 rounded-lg cursor-pointer transition-colors">
        <input
          type="file"
          multiple
          accept="image/jpeg, image/png"
          onChange={handlePhotoChange}
          className="hidden"
        />
        <div className="text-blue-600">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
          <span className="block">Arrastra fotos o haz clic para seleccionar</span>
          <span className="text-xs text-blue-400">Formatos: JPG, PNG (máx. 5MB c/u)</span>
        </div>
      </label>
    </div>
  );
};

export default PhotoUploader;
  

// DONE