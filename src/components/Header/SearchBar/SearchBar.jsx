import React from "react";
import {BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { useState, useContext } from "react";
import fetchProducts from "../../../api/fetchProducts";
import AppContext from "../../../context/AppContext";

function SearchBar() {

  const [searchValue, setSearchValue] = useState("");
  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    //utilizado para o form nao recarregar a pagina
    event.preventDefault(); 
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setSearchValue("");
    setProducts(products);
    setLoading(false);
  };
  return (
    <form className="searchBar" onSubmit={handleSearch}>
      
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos" 
        className="searchInput" 
        onChange={({target}) => setSearchValue(target.value)}
        required
      />
    
      <button 
        type="submit" 
        className="searchButton">
        <BsSearch />
      </button>
    
    </form> );
}

export default SearchBar;
