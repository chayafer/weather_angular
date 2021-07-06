import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  addToFavourites(currentCity: any) {
    return this.http.post<any>("http://localhost:23519/weather/v1/addfavourite",{currentCity});
  }
  getCurrentWeather(currentCity: any) {
    return this.http.get<any>("http://localhost:23519/weather/v1/currentweather?cityKey="+currentCity.cityKey+"&cityName="+currentCity.cityName);
  }
  private citySubject!: BehaviorSubject<City>;
    public city!: Observable<City>;

  constructor(private http: HttpClient) { }
  getCities(keyP: string) {
    return this.http.get<any>("http://localhost:23519/weather/v1/search?key="+keyP);
    // return this.http.get<any>("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=rLF5Q34EVFdmsffh2ZGOan2cvea7okba&q=je&details=true");
    
}

}
export class City {
  CityKey: number =0;
  CityName: string ="";
 }
