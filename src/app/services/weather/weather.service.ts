import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import '../rxjs-extensions';

@Injectable()
export class WeatherService {

    private weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=a0dee80d118b215a7582b4feebd995a7';  // URL to web api

    constructor(private http: Http) { }

    getWeather(): Promise<any> {
        return this.http.get(this.weatherUrl)
            .toPromise()
            .then(response => response.json() as any)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
