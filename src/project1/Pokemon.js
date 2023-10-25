// import logo from './logo.svg';
import { useState, useEffect } from "react";
import PokemonList from "./project1/PokemonList";
import "./App.css";
import axios from "axios";
import Pagination from "./project1/Pagination";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true); // Loading pages

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
    });

    return () => {};
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null}
       gotoPrevPage={prevPageUrl ? gotoPrevPage: null} />
    </>
  );
}

export default Pokemon;
