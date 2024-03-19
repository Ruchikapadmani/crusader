import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent {
  ngOnInit(){
    AOS.init();
  }
}
