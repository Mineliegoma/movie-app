import React from 'react';
function MovieCard(props) {
 return (
  <div class="image-container">
   <div class="image-card">
    <h2 class="title">{props.data.title}</h2>
    <img alt="" src={props.data.imageUrl} class="image" />
    <div class="likes-section">
     <span class="likes">0 likes</span>
     <button class="like-button">👍</button>
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