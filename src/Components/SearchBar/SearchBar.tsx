import './SearchBar.css';

export default function SearchBar(props: {
  handleInputChange: (event: any) => void;
}) {
  const { handleInputChange } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        onChange={handleInputChange}
      />
    </>
  );
}
