import style from "./SearchBar.module.css";

const SearchBar = ({ handleQuery }) => {
  return (
    <header className={style.searchHeader}>
      <form className={style.searchForm} onSubmit={handleQuery}>
        <input
          className={style.searchInput}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={style.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
