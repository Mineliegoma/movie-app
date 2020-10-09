import React from 'react';

class Form extends React.Component {
 state = {
  title: "",
  imageUrl: "",
  year: "",
  genre: ""

 }
 changeHandler = (e) => {
  console.log("changing")
  //Ex6 possibility
  this.setState({ [e.target.name]: e.target.value })
 }

 localSubmitHandler = (e) => {
  e.preventDefault()
  this.props.submitHandler(this.state)
  this.setState({
   title: "",
   imageUrl: '',
   year: "",
   genre: ""
  })

 }



 render() {
  console.log(this.state)
  return (
   <form onSubmit={this.localSubmitHandler}>
    <input type="text" name="title" placeholder="enter title" value={this.state.title} onChange={this.changeHandler} />
    <input type="number" name="year" placeholder="enter movie's year" value={this.state.year} onChange={this.changeHandler} />
    <input type="text" name="genre" placeholder="enter movie's genre" value={this.state.genre} onChange={this.changeHandler} />
    <input type="text" name="imageUrl" placeholder="image url" value={this.state.image} onChange={this.changeHandler} />
    <input type="submit" value="Create new movie" />


   </form >

  )
 }
}
export default Form