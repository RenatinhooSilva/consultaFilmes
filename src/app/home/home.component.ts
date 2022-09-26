import { MoviesService } from './../services/service-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public movieService: MoviesService) {}

  ngOnInit(): void {}

  searchMovies() {
    const filme = (<HTMLInputElement>document.getElementById('pesquisar'))
      .value;
    this.movieService.searchingMovies(filme).then((res) => {
      let filmes = this.movieService.mapMovis(res['results']);
      console.log(filmes);
    });
  }
}
