import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-amusement',
  templateUrl: './amusement.component.html',
  styleUrls: ['./amusement.component.css']
})
export class AmusementComponent {
  ngOnInit(){
    AOS.init();
  }
}
