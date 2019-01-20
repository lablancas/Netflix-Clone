import React, { Component } from "react";
import axios from '../../axios-movies'; 
import MovieGenre from './MovieGenre'; 
import Modal from "../../components/UI/Modal/Modal"; 
import MovieDetails from '../../components/Movie/MovieDetails/MovieDetails'; 

class MovieGenreRow extends Component {

  /** Hold each genre movie row in an array */
  state = {
    movieOverview: {},
    toggleModal: false,
  }

  /** Make all API calls as soon as our MovieGenreRow component mounts. */
  componentWillMount() {
  }
  
  /** 
   Get the movie details for a single movie 
   @param {object} movieObject - A single movie object
   */
  getMovieDetails = (movieObject) => {
    console.log(movieObject);
    this.setState({ toggleModal: true }); 
    this.setState({ movieOverview: movieObject }); 
    
  }

  closeModal = () => {
    this.setState({toggleModal: false})
  }


  /** Extract our movie data and pass it to our MovieGenre Component. */
  getMovieRows = (res, url) => {
    const results = res.data.results; 
    let movieRows = []; 
     
    results.forEach((movie) => {
      let movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.backdrop_path;
      if (url === "/discover/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_networks=213") {
        movieImageUrl = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
      }
      
      if (movie.poster_path && movie.backdrop_path !== null) {
       
        const movieComponent = <MovieGenre
          movieDetailsModal={() => this.getMovieDetails(movie)}
          key={movie.id}
          url={url}
          posterUrl={movieImageUrl}
          movie={movie} />
        movieRows.push(movieComponent);
      }
    })
    
   return movieRows; 
       
  }

   render() {

      return (  
        <div className="movieShowcase">
          <Modal show={this.state.toggleModal} modalClosed={this.closeModal} movie={this.state.movieOverview}>
            <MovieDetails movie={this.state.movieOverview}/>
          </Modal>
        </div>
      );
   }
}

export default MovieGenreRow; 
