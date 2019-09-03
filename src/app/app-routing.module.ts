import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie-details/:id', component: MovieDetailsComponent},
  {path: 'search-results/:query', component: SearchResultsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, MovieDetailsComponent, PageNotFoundComponent, SearchResultsComponent, FavoritesComponent]