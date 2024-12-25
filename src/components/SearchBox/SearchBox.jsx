import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.searchBox}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      ></input>
    </div>
  );
}