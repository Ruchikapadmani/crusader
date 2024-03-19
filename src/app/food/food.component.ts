import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  ngOnInit(){
    AOS.init();
  }
}
