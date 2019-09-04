import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fav } from './fav';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public URL = 'http://localhost:3004/favs';
  constructor(private http: HttpClient) { }
  getFavorites() {
    return this.http.get(this.URL);
  }
  addFavorites(movie) {
    let favo: fav = new fav();
    favo.id = movie.id;
    favo.poster_path = movie.poster_path;
    favo.title = movie.title;
    favo.overview = movie.overview;
    favo.vote_average = movie.vote_average;
    favo.comments = [""];
    return this.http.post(this.URL, favo, {headers: new HttpHeaders({'Content-Type':  'application/json',})});
  }
  removeFavorites(id) {
    return this.http.delete(this.URL + "/" + id, {headers: new HttpHeaders({'Content-Type':  'application/json',})});
  }
  addComment(movie) {
    return this.http.put(this.URL + "/" + movie.id, movie, {headers: new HttpHeaders({'Content-Type':  'application/json',})});
  }
  editComment(movie) {
    return this.http.put(this.URL+"/"+movie.id,movie,{headers: new HttpHeaders({'Content-Type':  'application/json',})});
  }
}
