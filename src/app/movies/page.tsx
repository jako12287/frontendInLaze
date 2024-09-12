"use client"

import { Font_IBM } from '@/ui/fonts';
import { useFetchMovies } from '@/hooks/useFetchMovies';
import styles from "../styles/main.module.css"
import InputSearch from '@/ui/components/core/InputSearch';
import SelectFilter from '@/ui/components/core/SelectFilter';
import CardMovie from '@/ui/components/CardMovie';


export default function MoviesPage() {
  const { moviesPopular, nowPlaying, upComing, topRated, error, loading } = useFetchMovies()

  if (loading) {
    return <p>Loading...</p>;
  }

  if (moviesPopular.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <article className={styles.containerMain}>


      <div className={styles.containerFilters}>
        <div>

          <InputSearch label='Search' />
        </div>
        <div>

          <SelectFilter label='Gender' />
        </div>

      </div>

      <div className={styles.containerCards}>

        <div>
          <h1 className={`${Font_IBM.className} antialiazed ${styles.titleSection}`}>Popular</h1>
          <ul>
            {moviesPopular.map((movie: any) => {
              console.log("moviesPopular", movie)
              return <CardMovie
                key={movie.id}
                id={movie.id} title={movie.title} 
                release_date={movie.release_date} 
                vote_average={movie.vote_average}
                backdrop_path={movie.backdrop_path
                }
                />
            })}
          </ul>
        </div>

        <div>
          <h1 className={`${Font_IBM.className} antialiazed ${styles.titleSection}`}>Movies cartelera</h1>
          <ul>
            {nowPlaying.map((movie: any) => (
              <li key={movie.id}>
                <a href={`/movies/${movie.id}`}>{movie.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className={`${Font_IBM.className} antialiazed ${styles.titleSection}`}>Movies up coming</h1>
          <ul>
            {upComing.map((movie: any) => (
              <li key={movie.id}>
                <a href={`/movies/${movie.id}`}>{movie.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className={`${Font_IBM.className} antialiazed ${styles.titleSection}`}>Movies top rated</h1>
          <ul>
            {topRated.map((movie: any) => (
              <li key={movie.id}>
                <a href={`/movies/${movie.id}`}>{movie.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </article>
  );
}
