import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecoverPasswordService } from '../services/recover-password.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token = '';
  form: any = {
    password: null,
    password2: null
  }

  passSuccess = false;
  isSuccessful = false;
  isSignUpFailed = false;
  passwordMatch = true;
  
  errorMessage = '';
  constructor(private route: ActivatedRoute, private service: RecoverPasswordService, private enrutador: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });

    console.log(this.token);
  }

  onSubmit() {
    const {password, password2} = this.form;

    if (password==password2) {
      this.service.confirmPasswordChange(this.token, password).subscribe(
        data => {
          this.passSuccess = true;
        }, error => {
          console.log('change error')
          this.enrutador.navigate(['/message-error']);
        }
      );
    } else {
      this.passwordMatch = false;
    }

    /*
    this.passwordService.sendPasswordRequest(email).subscribe(
      data => {
        this.route.navigate(['/message-success']);
      }, error => {
        this.route.navigate(['/message-error']);
      }
    );*/

  }

}
