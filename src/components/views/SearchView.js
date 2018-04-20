import React from 'react'

const SearchView = ({ onChange, value }) => (
	<div>
		<input
			type="text" 
			placeholder="Search..." 
			onChange={ onChange }
			value={ value }/>
	</div>
)

export default SearchView;