import { Component } from '@angular/core';
import { TokenStorageServiceService } from './services/token-storage-service.service';
import { AnimationBuilder, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-frontend';
  private roles: string[] = [];
isLoggedIn = false;
showAdminBoard = false;
showModeratorBoard = false;
username?: string;
constructor(private tokenStorageService: TokenStorageServiceService) { }
ngOnInit(): void {
this.isLoggedIn = !!this.tokenStorageService.getToken();
if (localStorage.getItem('isLoggedIn')=='true') {
  this.isLoggedIn=true;
}
if (this.isLoggedIn) {
const user = this.tokenStorageService.getUser();
this.roles = user.roles;
this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
this.username = user.username;
}
}
logout(): void {
this.tokenStorageService.signOut();
localStorage.clear()
window.location.reload();
}
}
