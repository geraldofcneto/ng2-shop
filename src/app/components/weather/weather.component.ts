import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';

@Component({
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {
    constructor(private weatherService: WeatherService) { 
        this.weatherData = weatherService.getWeather();
        console.log(this.weatherData);
    }

    ngOnInit() { }

    weatherData:any;
}