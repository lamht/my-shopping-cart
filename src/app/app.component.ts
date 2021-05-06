import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './shared/animations/fadeIntRoute';
import { UserService } from './shared/services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent implements OnInit{
  title = 'my-shopping-cart';

  

  constructor(private userService: UserService) {}
  
  ngOnInit() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setGeoLocation.bind(this));
    }
  }

  setGeoLocation(position: { coords: { latitude: any; longitude: any } }) {
    const {
      coords: { latitude, longitude },
    } = position;
    this.userService.setLocation(latitude, longitude);
  }
}
