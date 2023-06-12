import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-edit-profile-component',
  templateUrl: './edit-profile-component.component.html',
  styleUrls: ['./edit-profile-component.component.css']
})
export class EditProfileComponentComponent implements OnInit {
  form: any = {
    username: null,
    email: null
  };
  isSuccessful = false;
  profileUpdated = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  currentUser: any;
  constructor(private token: TokenStorageServiceService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    if (localStorage.getItem('isLoggedIn')=='true') {
      this.isLoggedIn = true;

    } else {
      this.isLoggedIn = false;

    }

  }

  onSubmit(): void {
    const { username, email } = this.form;
    console.log(username, email);

    this.authService.updateUser(this.currentUser.id, email, username).subscribe(
      data => {
        this.profileUpdated = true;
        this.isSuccessful = true;  
        this.currentUser.username=username;
        this.currentUser.email = email;
        localStorage.clear();
        sessionStorage.clear();
      }, error => {
        this.isSignUpFailed=true;
        this.errorMessage = error.error.message;
      }
    );

  }

}
