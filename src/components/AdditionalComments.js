import { useState } from 'react';

const AdditionalComments = () => {
  const MAX_CHARS = 500;
  const [comments, setComments] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_CHARS) {
      setComments(e.target.value);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Observaciones adicionales</h2>
        <span 
          className={`text-sm ${
            MAX_CHARS - comments.length < 50 
              ? 'text-orange-500' 
              : 'text-gray-500'
          }`}
        >
          {MAX_CHARS - comments.length} caracteres restantes
        </span>
      </div>
      
      <textarea
        value={comments}
        onChange={handleChange}
        placeholder="Ej: La baranda está completamente suelta y representa peligro para los niños..."
        rows={5}
        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      
      <p className="mt-2 text-xs text-gray-400">
        Describe con detalle el problema (máx. {MAX_CHARS} caracteres)
      </p>
    </div>
  );
};

export default AdditionalComments;


// DONE