function Slider({ visibleCharacters, setHoveredCharacter }) {
    return (
      <div className="slider">
        {visibleCharacters.map((character, i) => (
          <div
            className="item"
            key={character.id}
            style={{
              "--position": i + 1,
              "--quantity": visibleCharacters.length,
            }}
          >
            <img
              src={character.image}
              alt={character.name}
              onMouseEnter={() => setHoveredCharacter(character)}
              onMouseLeave={() => setHoveredCharacter(null)}
            />
          </div>
        ))}
      </div>
    );
  }
  
  export default Slider;
  