import React from 'react'

function SearchForm(props) {
 return (
  <form>
   <input type="text" placeholder="search movie by title" value={props.mySearch} onChange={props.searchHandler} />
  </form>

 )
}
export default SearchForm