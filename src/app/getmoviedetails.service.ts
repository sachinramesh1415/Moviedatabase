import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetmoviedetailsService {
  
  private url = 'https://api.themoviedb.org/3/';
  private apiKey = '8e105212c570cdfdffccc66435aa289b';
  constructor(private http: HttpClient) { }

  getMoviedetails(movieID) {
    let moviesUrl = `${this.url}movie/${movieID}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(moviesUrl);
  }
}
