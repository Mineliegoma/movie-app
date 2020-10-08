import React from 'react';
import movies from './api'
import MovieCard from './MovieCard'


class MovieContainer extends React.Component {
 renderMovies = () => {
  return movies.map(aMovie => <MovieCard key={aMovie.id} data={aMovie} />)

 }

 render() {
  //console.log(renderMovie)
  return (
   <div>

    <h1 className="header">Welcome to Janglo</h1>

    {this.renderMovies()}

   </div>
  )
 }

}
export default MovieContainer