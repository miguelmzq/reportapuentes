const SubmitButton = () => {
  const handleSubmit = () => {
    // Lógica para enviar el reporte
    const ticketNumber = Math.floor(Math.random() * 1000000);
    alert(`¡Reporte enviado! Tu número de seguimiento es: RP-${ticketNumber}`);
  };

  return (
    <button
      onClick={handleSubmit}
      className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
    >
      Enviar Reporte
    </button>
  );
};
export default SubmitButton;