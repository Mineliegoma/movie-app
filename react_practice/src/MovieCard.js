import React from 'react';
class MovieCard extends React.Component {
 state = {
  likes: this.props.data.likes
 }
 incrementLikes = () => {
  //console.log(this.props.data.likes)
  this.setState(previousState => {
   return {
    likes: parseInt(previousState.likes) + 1

   }
  })

 }


 clickHandler = () => {
  console.log('im clicking')
  this.incrementLikes(this.state)
 }
 movieLikes = () => {
  console.log(this.state.likes)
  return this.state.likes
 }

 render() {
  return (
   <>
    <div class="container">
     <div class="card-front">
      <h2 class="title-card">{this.props.data.title}</h2>
      <img alt="" src={this.props.data.imageUrl} class="image" />
      <div class="likes-section">
       <span class="number-likes">{this.movieLikes()} likes</span>
       <button onClick={this.clickHandler} class="button">👍</button>
      </div>
      <div class="more-infos">
       <p>{this.props.data.genre}</p>
       <p>{this.props.data.year}</p>
      </div>
     </div>
    </div>
   </>

  )
 }
}
export default MovieCard