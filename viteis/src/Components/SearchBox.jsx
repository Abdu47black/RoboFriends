const SearchBox = ({ SearchChange }) => {
	return (
		<div className="Search">
			<input
				className="SearchBox"
				type="Search"
				placeholder="Search Robots"
				onChange={SearchChange}
			/>
		</div>
	);
};
export default SearchBox;
