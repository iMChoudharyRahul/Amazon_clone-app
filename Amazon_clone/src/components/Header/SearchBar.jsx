import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  return (
    <form className="search-container" onSubmit={(e) => e.preventDefault()}>
      <input
        ref={searchInputRef}
        name="product-search"
        className="search-input"
        type="text"
        placeholder="Search Amazon.in"
      />
      <button
        type="submit"
        onClick={() =>
          navigate(
            `filtered_products?category=${searchInputRef.current?.value.toLowerCase()}`
          )
        }
        className="search-btn"
      >
        <SearchIcon style={{ fontSize: "30px", color: "black" }} />
      </button>
    </form>
  );
};

export default SearchBar;
