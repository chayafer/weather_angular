import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  {
      path: '',
      component: CityWeatherComponent
  },
  {
      path: 'favourite',
      component: FavouritesComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
