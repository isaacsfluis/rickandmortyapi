function CharacterCard({image, name, setHoveredCharacter }) {
  return (
    <div
      className="item"
      style={{ "--position": i + 1, "--quantity": visibleCharacters.length }}
    >
      <img
        src={image}
        alt={name}
        onMouseEnter={() => setHoveredCharacter(character)}
        onMouseLeave={() => setHoveredCharacter(null)}
      />
    </div>
  );
}

export default CharacterCard;
