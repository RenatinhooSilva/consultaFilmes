/* eslint-disable @typescript-eslint/naming-convention */
export class Movie {
  title?: string;
  release_date?: string;
  overview?: string;
  vote_average?: string;
  poster_path?: string;

  constructor(movie: Movie) {
    this.release_date = movie.release_date;
    this.overview = movie.overview;
    this.title = movie.title;
    this.vote_average = movie.vote_average;
    this.poster_path = movie.poster_path;
  }
}
