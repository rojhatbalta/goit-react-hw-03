import PropTypes from "prop-types";
import "./Searchbox.module.css";

export default function SearchBox({ handleSearch, search }) {
  return (
    <div className="searchContainer">
      <p>Find contacts by name</p>
      <input type="search" value={search} onChange={handleSearch} />
    </div>
  );
}

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
