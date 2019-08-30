import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmovieService {
  private url = 'https://api.themoviedb.org/3/';
  private apiKey = '8e105212c570cdfdffccc66435aa289b';
  constructor(private http: HttpClient) { }
  getMovies() {
    let moviesUrl = `${this.url}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get(moviesUrl);
  }
}
