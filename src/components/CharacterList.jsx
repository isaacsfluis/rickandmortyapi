import CharacterCard from './CharacterCard';

function CharacterList({ visibleCharacters, setHoveredCharacter }) {
  return (
    <div className="slider">
      {visibleCharacters.map((character, i) => (
        <CharacterCard
          key={character.id}
          character={character}
          setHoveredCharacter={setHoveredCharacter}
        />
      ))}
    </div>
  );
}

export default CharacterList;
