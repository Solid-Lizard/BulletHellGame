import { Component, OnInit } from '@angular/core';
import { MailServiceService } from 'src/app/services/mail-service.service';
import { Email } from 'src/app/clases/email';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public mail: Email;

constructor() {
  this.mail = new Email();
}

  ngOnInit(): void {
    
  }

  public submit(): void {
    console.log(this.mail.subject);
    console.log(this.mail.text);
  }

  myFunc() {
    console.log("boton presionado")
  }

  //constructor(private correoService: MailServiceService) {}

  /*
  enviarFormulario() {
    const emailData = {
      to: 'santi.lopar@gmail.com',
      subject: this.asunto,
      body: this.cuerpo
    };

    this.correoService.sendMail(emailData).subscribe(
      response => {
        console.log('Correo enviado correctamente');
        // Restablecer los campos del formulario después de enviarlo
        this.resetFormulario();
      },
      error => {
        console.log('Error al enviar el correo', error);
      }
    );
  }

  resetFormulario() {
    this.asunto = '';
    this.cuerpo = '';
  }
  */
}
