import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetmoviedetailsService } from '../getmoviedetails.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieID ;
  public movie = {};
  public check ;
  constructor(private route: ActivatedRoute, private _getmoviedetailsService: GetmoviedetailsService, private _addF: FavoriteService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.movieID = id;
    this.movie = this._getmoviedetailsService.getMoviedetails(this.movieID).subscribe(data => this.movie = data);
    this._getmoviedetailsService.checkFav(this.movieID).subscribe(_checkFav => this.check = true, error => this.check = false);
  }
  addFav() {
    this._addF.addFavorites(this.movie).subscribe();
    this.ngOnInit();
  }

}
