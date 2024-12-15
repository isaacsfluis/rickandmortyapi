import { useEffect, useState } from "react";
import { fetchData } from "./services/Api.js";
import Slider from "./components/Slider";
import Navigation from "./components/Navigation";
import CharacterDetails from "./components/CharacterDetails";
import "./styles/App.css";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  useEffect(() => {
    async function getCharacters() {
      const data = await fetchData(page);
      setCharacters(data);
      setVisibleCharacters(data.slice(0, 10));
      setIndex(0);
    }
    getCharacters();
  }, [page]);

  const handleNext = () => {
    const nextIndex = index + 10;
    if (nextIndex < characters.length) {
      setVisibleCharacters(characters.slice(nextIndex, nextIndex + 10));
      setIndex(nextIndex);
    } else {
      setPage(page + 1);
    }
  };

  const handlePrevious = () => {
    const prevIndex = index - 10;
    if (prevIndex >= 0) {
      setVisibleCharacters(characters.slice(prevIndex, prevIndex + 10));
      setIndex(prevIndex);
    } else if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <div className="banner">
        <Slider
          visibleCharacters={visibleCharacters}
          setHoveredCharacter={setHoveredCharacter}
        />
        <CharacterDetails hoveredCharacter={hoveredCharacter} />
        <Navigation
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          page={page}
          index={index}
        />
      </div>
    </div>
  );
}
