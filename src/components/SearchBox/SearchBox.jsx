import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch, value }) => {
    return (
        <div className={css.searchBox}>
            <p>Find contacts by names</p>
            <input
                type="text"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchBox;