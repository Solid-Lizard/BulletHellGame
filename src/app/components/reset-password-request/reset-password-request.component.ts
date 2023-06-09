import { Component, OnInit } from '@angular/core';
import { RecoverPasswordService } from 'src/app/services/recover-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.css']
})
export class ResetPasswordRequestComponent implements OnInit {
  form: any = {
    email: null
  }

  isSuccessful = false;
  isSignUpFailed = false;
  
  errorMessage = '';

  constructor(private passwordService: RecoverPasswordService, private route: Router) { }

  ngOnInit(): void {
  }

  
  onSubmit() {
    const {email} = this.form;

    this.passwordService.sendPasswordRequest(email).subscribe(
      data => {
        this.route.navigate(['/message-success']);
      }, error => {
        this.route.navigate(['/message-error']);
      }
    );

  }


}
