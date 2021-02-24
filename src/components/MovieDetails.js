
import React from 'react';
export function MovieDetails (props){


  

    return (
      <>
        <h5>Title: {props.results.Title}</h5>
        <h5>Year: {props.results.Year}</h5>
        <h5>Rated: {props.results.Rated}</h5>
        <h5>Released: {props.results.Released}</h5>
        <h5>Runtime: {props.results.Runtime}</h5>
        <h5>Genre: {props.results.Genre}</h5>
        <h5>Director: {props.results.Director}</h5>
        <h5>Writer: {props.results.Writer}</h5>
        <h5>Actors: {props.results.Actors}</h5>
        <h5>Plot: {props.results.Plot}</h5>
        <h5>Language: {props.results.Language}</h5>
        <h5>Country: {props.results.Country}</h5>
        <h5>Awards: {props.results.Awards}</h5>
        <img src={props.results.Poster} alt="Logo" />;
      </>
    )
  }
