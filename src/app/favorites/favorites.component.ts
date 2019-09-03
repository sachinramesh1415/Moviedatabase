import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { fav } from '../fav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _getFav: FavoriteService, private router: Router) { }
  public favoritesList: fav[];
  ngOnInit() {
    this._getFav.getFavorites().subscribe(res => this.favoritesList =
      res as fav[]);
  }
  removeFav(id) {
    this._getFav.removeFavorites(id).subscribe();
    this.ngOnInit();
  }
  addComm(value, movie) {
    movie.comments.push(value);
    this._getFav.addComment(movie);
  }
}
