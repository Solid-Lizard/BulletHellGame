import { Component, OnInit } from '@angular/core';
import { MailServiceService } from 'src/app/services/mail-service.service';
import { Email } from 'src/app/clases/email';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public mail: Email;

constructor(private mailService: MailServiceService, private route:Router) {
  this.mail = new Email();
}

  ngOnInit(): void {
    
  }

  public submit(): void {
    this.mailService.sendMail(this.mail).subscribe(
      (data: number) => {
        this.route.navigate(['/message-success']);
   
      },
      (error: Error) => {
        this.route.navigate(['/message-error']);
      }
      )        

  }


}
