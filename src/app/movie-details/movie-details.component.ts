import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetmoviedetailsService } from '../getmoviedetails.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movieID ;
  public movie = {};
  constructor(private route: ActivatedRoute, private _getmoviedetailsService: GetmoviedetailsService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.movieID = id;
    this.movie = this._getmoviedetailsService.getMoviedetails(this.movieID).subscribe(data => this.movie = data);
  }

}
