function MovieList(props) {
  return (
    <ol>
      {props.movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ol>
  )
}

export default MovieList
