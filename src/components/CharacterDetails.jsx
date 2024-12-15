function CharacterDetails({ hoveredCharacter }) {
    return (
      hoveredCharacter && (
        <div className="character-name">
          <p>Name: {hoveredCharacter.name}</p>
          <p>Status: {hoveredCharacter.status}</p>
          <p>Specie: {hoveredCharacter.species}</p>
          <p>Gender: {hoveredCharacter.gender}</p>
        </div>
      )
    );
  }
  
  export default CharacterDetails;
  