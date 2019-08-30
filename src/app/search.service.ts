import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url = 'https://api.themoviedb.org/3/';
  private apiKey = '8e105212c570cdfdffccc66435aa289b';
  constructor(private http: HttpClient) { }
  getMovieSearch(query) {
    let moviesUrl = `${this.url}search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    return this.http.get(moviesUrl);
  }
}
