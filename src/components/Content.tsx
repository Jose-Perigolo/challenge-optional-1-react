import { MovieCard } from './MovieCard'

import '../styles/content.scss'

interface ContentProps {
  movies: Array<{
    imdbID: string
    Title: string
    Poster: string
    imdbRating: string
    Runtime: string
  }>
  selectedGenre: {
    title: string
  }
}

export function Content (props: ContentProps) {
  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {props.movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.imdbRating + '/10'}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
