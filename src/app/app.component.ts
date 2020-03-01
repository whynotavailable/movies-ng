import { Component } from '@angular/core';
import { Movie, MovieListService } from './movie-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies';
  movies: Movie[] = [];

  get moviesLeft(): number {
    return this.movies.filter(movie => !movie.watched).length;
  }

  constructor(private movieListService: MovieListService) {
    this.movies = movieListService.getMovieList();
  }

  getStruck(movie: Movie) {
    if (movie.watched || movie.skipping) {
      return 'line-through';
    }
  }

  getStruckColor(movie: Movie) {
    if (movie.watched) {
      return 'green';
    } else if (movie.skipping) {
      return 'red';
    }
  }
}
