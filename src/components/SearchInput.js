import React, {useState} from 'react';
import {MovieDetails} from './MovieDetails'
import {ValidationError} from './ValidationError'

export function SearchInput (props) {
  const SearchStyling = {width:"12rem",background:"#F2F1F9", border:"solid 1px",padding:"0.5rem", margin:"0.2rem"};
  const SubmitStyling= {width:"8rem",background:"#F2F1F9", border:"solid 1px ", padding:"0.5rem"};
  const [input, setInput] = useState("");
  const [results, setResults] = useState("");
  const Url = (props) => {
    return `http://www.omdbapi.com/?t=${input}&apikey=cb0d871d`
    } 
  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(Url())
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw Error(response.status)
            })
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.log(error + " data is not correct"))   
  }
    return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h1>Please fill a title</h1>
          <br></br>
          <input
            id="search"
            style={SearchStyling}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" style={SubmitStyling} onSubmit={handleSubmit}/>
      </form>
      <b>{ results.Title ? <MovieDetails results = {results}/>:<ValidationError />}</b>  
    </>
    );
  }