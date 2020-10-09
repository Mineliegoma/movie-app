import React from 'react';
function MovieCard(props) {
 return (
  <div class="container">
   <div class="card-front">
    <h2 class="title-card">{props.data.title}</h2>
    <img alt="" src={props.data.imageUrl} class="image" />
    <div class="likes-section">
     <span class="number-likes">0 likes</span>
     <button class="button">👍</button>
    </div>
    <div class="more-infos">
     <p>{props.data.genre}</p>
     <p>{props.data.year}</p>
    </div>
   </div>
  </div>

 )
}
export default MovieCard