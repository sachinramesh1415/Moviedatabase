import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { fav } from '../fav';
import { Router } from '@angular/router';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private _getFav: FavoriteService, private router: Router) { }
  public favoritesList: fav[];
  public editt:boolean = true;
  public editn:number;
  ngOnInit() {
    this._getFav.getFavorites().subscribe(res => this.favoritesList =
      res as fav[]);
  }
  removeFav(id) {
    this._getFav.removeFavorites(id).subscribe(()=>this.ngOnInit());
  }
  addComm(value, movie) {
    movie.comments.push(value);
    this._getFav.addComment(movie).subscribe();
  }
  editComm(value, movie) {
    movie.comments[this.editn] = value;
    this._getFav.editComment(movie).subscribe();
    this.editt = true;
  }
  edit(value) {
    this.editt = false;
    this.editn = value;
  }
}
