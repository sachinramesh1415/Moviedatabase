import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public movies = {};
  public quer;
  constructor(private route: ActivatedRoute, private _searchService: SearchService, private router: Router) { }

  ngOnInit() {
    let q = this.route.snapshot.paramMap.get('query');
    this.quer = q;
    this.movies = this._searchService.getMovieSearch(this.quer).subscribe(data => this.movies = data);
  }
  onClick(movie) {
    this.router.navigate(['/movie-details', movie.id]);
  }

}
