import {Component} from '@angular/core';
import { WeatherWidget } from './weather-widget/weather-wiget.component';
import { OpenWeatherApi } from './weather-widget/open-weather-api.service';

@Component({
    selector: 'my-app',
    directives: [WeatherWidget],
    styleUrls: ['app/app.styles.css'],
    template: `
    <div class="app">
      <weather city="Berlin"></weather>
      <weather city="Hamburg"></weather>
      <weather city="Munich"></weather>
    </div>
    `,
    providers: [OpenWeatherApi]
})
export class AppComponent { }
