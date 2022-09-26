export class Movie {
  title?: string;
  release_date?: string;
  overview?: string;
  vote_average?: string;

  constructor(movie: Movie) {
    this.release_date = movie.release_date;
    this.overview = movie.overview;
    this.title = movie.title;
    this.vote_average = movie.vote_average;
  }
}
