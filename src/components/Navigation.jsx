function Navigation({ handleNext, handlePrevious, page, index }) {
  return (
    <div className="navigation">
      <button onClick={handlePrevious} disabled={page === 1 && index === 0}>
        Anterior
      </button>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
}

export default Navigation;
