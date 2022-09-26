import { HomeComponent } from './../home/home.component';
import { Movie } from './../Models/movies';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiUrl: string;
  apiKey: string;

  // apiUrlSecond: string;
  // apiKey: string;

  constructor(private http: HttpClient) {
    this.apiKey = '8f0c971b28cebb2b93d0199d897ea8c2';
    this.apiUrl =
      'https://api.themoviedb.org/3/search/movie?api_key=[apiKey]&language=pt-BR&query=[filme]&page=1&include_adult=false';
  }

  searchingMovies(title: string): Promise<any> {
    this.apiUrl = this.apiUrl.replace('[filme]', title);
    this.apiUrl = this.apiUrl.replace('[apiKey]', this.apiKey);
    return this.http.get<Movie>(this.apiUrl).toPromise();
  }

  mapMovis(movies: Array<any>) {
    let moviesFormatted = new Array();
    moviesFormatted = movies.map((m) => new Movie(m));
    return moviesFormatted;

    // movies.forEach(movie => {
    //    private movieOb: Movie = new Movie {
    //     title = movie['title'],
    //     overview = movie['overview'],
    //     year = movie['year']
    // }
    // })
  }
}
