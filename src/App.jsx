import { useState, useEffect } from 'react'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    setMovies(['Shrek', 'Król Lew', 'Toy Story'])
  }, [])

  function handleAdd() {
    if (title === '') return
    setMovies([...movies, title])
    setTitle('')
  }

  return (
    <div>
      <h1>Moje filmy do obejrzenia</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tytuł filmu"
        />
        <button onClick={handleAdd}>Dodaj film</button>
      </div>
      <MovieList movies={movies} />
    </div>
  )
}

export default App
