import React from 'react'

const SearchView = ({ onChange, defaultQuery }) => (
	<div>
		<input
			type="text" 
			placeholder="Search..." 
			onChange={ onChange }
			value={ defaultQuery } />
	</div>
)

export default SearchView;