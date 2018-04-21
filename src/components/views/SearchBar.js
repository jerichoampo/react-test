import React from 'react'
import '../../styles/SearchBar.css'

const SearchBarSpinner = () => (
	<div className="Sb-spinner">
		<div className="Sb-spinner__circle Sb-spinner__circle--large"/>
		<div className="Sb-spinner__circle Sb-spinner__circle--medium"/>
		<div className="Sb-spinner__circle Sb-spinner__circle--small"/>
	</div>
)

const SearchBar = ({ onChange, onKeyPress, value, isFetching }) => (
	<div className="SearchBar">
		<input className="SearchBar__input"
			type="text" 
			placeholder="Search..." 
			value={ value }
			onChange={ onChange } 
			onKeyPress={ onKeyPress } />
		<div className="SearchBar__spinner">
			{ isFetching ? <SearchBarSpinner/> : null }
		</div>
	</div>
)

export default SearchBar;