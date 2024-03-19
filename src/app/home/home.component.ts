import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    // prompt('enter your name')
    AOS.init();
  }

  cardid: String = "";
  finalid: String = "";
  check() {
    this.finalid = this.cardid;
    console.log(this.finalid);
  }

}
