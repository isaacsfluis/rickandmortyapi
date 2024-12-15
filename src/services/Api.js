import axios from "axios";

export async function fetchData(page = 1) {
  const response = await axios(`https://rickandmortyapi.com/api/character/?page=${page}`);
  return response.data.results; // Devuelve solo los personajes
}
