import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";

import { HandleSearchBarSubmitFunction } from "../types";
import React from "react";

type SearchBarProps = {
  onSubmit: HandleSearchBarSubmitFunction;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputElement = form.elements.namedItem("input") as HTMLInputElement;
    const value = inputElement.value;
    if (value.trim() === "") {
      toast.error("Please enter text");
      return;
    }
    onSubmit(value);
    form.reset();
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchFormInput}
        />
        <button type="submit" className={css.searchFormBtn}>
          <FcSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
