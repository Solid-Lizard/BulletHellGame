import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  constructor(private token: TokenStorageServiceService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
