import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requeriments',
  templateUrl: './requeriments.component.html',
  styleUrls: ['./requeriments.component.css']
})
export class RequerimentsComponent implements OnInit {

  isLoggedIn = false;

  constructor() {
    if (localStorage.getItem('isLoggedIn')=='true') {
      this.isLoggedIn=true;
    } else  {
      this.isLoggedIn=false;
    }
  }
  

  ngOnInit(): void {
  }

}
