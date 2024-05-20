import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className=' md:relative md:-mt-52 md:z-20'>
      <MovieList title= "NOW PLAYING" movies={movies.nowPlaying}/>
      <MovieList title= "TRENDING" movies={movies.popularMovies}/>
      <MovieList title= "TOP RATED" movies={movies.topRated}/>
      <MovieList title= "UPCOMING" movies={movies.upcomming}/>
    </div>
  )
}

export default SecondaryContainer
