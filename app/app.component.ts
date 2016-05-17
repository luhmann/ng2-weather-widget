import { Component } from '@angular/core';
import { WeatherWidget } from './weather-widget/weather-wiget.component';
import { OpenWeatherApi } from './weather-widget/open-weather-api.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    directives: [WeatherWidget],
    styleUrls: ['app/app.styles.css'],
    template: `
    <div class="app" [class.app_loading]="isLoading">
      <weather city="Berlin"></weather>
      <weather city="Hamburg"></weather>
      <weather city="Munich"></weather>
      <weather city="New York"></weather>
      <weather city="Tokio"></weather>
    </div>
    `,
    providers: [OpenWeatherApi]
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit() {
    this.isLoading = false;
  }
}
