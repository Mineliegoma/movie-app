import React from 'react';
import movies from './api'
import MovieCard from './MovieCard'
import Form from './Components/Form.js'


class MovieContainer extends React.Component {
 state = {
  movies: movies
 }
 renderMovies = () => {
  return this.state.movies.map(aMovie => <MovieCard key={aMovie.id} data={aMovie} />)

 }
 submitHandler = (movieObj) => {
  console.log("submitting:", movieObj)
  //take the object and add to api
  let newArray = [movieObj, ...this.state.movies]

  //rerender the MovieContainer so it prints the updated movie
  this.setState({ movies: newArray })
  console.log(newArray)

 }

 render() {
  //console.log(renderMovie)
  return (
   <div>
    <h1 className="header">Welcome to Janglo</h1>
    <br />
    <Form submitHandler={this.submitHandler} />
    <br />
    <br />
    {this.renderMovies()}
   </div>
  )
 }

}
export default MovieContainer