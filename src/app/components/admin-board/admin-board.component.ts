import { Component, OnInit } from '@angular/core';
import { TokenStorageServiceService } from 'src/app/services/token-storage-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {

  entities:User[] =   [];
  roles: String [] = [];  

  isAdmin = false;

  constructor(private tokenService: TokenStorageServiceService, private userService: UserServiceService) {     
  }

  ngOnInit(): void {
    const user = this.tokenService.getUser();

    this.roles = user.roles;
    
    if (this.roles.includes('ROLE_ADMIN')) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    this.userService.getAllUsers().subscribe( data => {    
      this.entities = data;  
      console.log(this.entities);

    } , error => {
      console.log(error);
      
    });

    console.log(this.entities);
  }

  deleteUser(id: any) {
    console.log(id);
    this.userService.deleteUser(id).subscribe(data => {
      console.log('operacion exitosa');
      window.location.reload();
    }, error => {
      console.log('algo ha salido muy mal');
    });
  }

  onSubmit() {    
 
  }
}
