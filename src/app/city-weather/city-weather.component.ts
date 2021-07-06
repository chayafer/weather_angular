import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.scss']
})
export class CityWeatherComponent implements OnInit {
  cities: any[] = [];
  keyP: any = "";
  currentCity: any;
  cityWeather: any;
  error: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  searchCity(): void {
    this.weatherService.getCities(this.keyP).subscribe(data =>
      // When observable resolves, result should match test data
      this.cities = data), (error: any) => {
        this.error = error;
      }
  }
  getCurrentWeather(currentCity: any): void {
    this.currentCity = currentCity;
    this.weatherService.getCurrentWeather(currentCity).subscribe(data =>
    {
      this.cityWeather =data;
     // this.currentCity.weatherText = data.weatherText;

    }),
      (error: any) => {
        this.error = error;
      }
  }
  addToFavourites(): void {
    this.weatherService.addToFavourites(this.currentCity).subscribe(data =>
    {
      let result = data;

    }),
      (error: any) => {
        this.error = error;
      }
  }
  

}
