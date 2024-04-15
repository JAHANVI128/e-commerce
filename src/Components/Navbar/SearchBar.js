import "./SearchBar.css";
import search from '../Assets/Vector.svg'

const SearchBar = () => {

  return (
      <div className="searchBarSection">
        <img src={search} alt="search" className="searchBar"/>
        <input type="text" placeholder="Search products"/>
      </div>
  );
};

export default SearchBar;