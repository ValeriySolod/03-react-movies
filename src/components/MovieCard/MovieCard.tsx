import type { Movie } from '../../types/movie';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{movie.title}</h3>
      <p className={styles.text}>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;