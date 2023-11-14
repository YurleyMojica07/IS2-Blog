import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/domain/users/user.model';
import { UserService } from 'src/app/domain/users/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  nuevoUsuario: UserModel = {
    id: 0,
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
    email: '',
    password: '',
    username: ''
  };

  constructor(private userService: UserService, private router: Router) {
  }

  submitForm() {
    this.userService.createUser(this.nuevoUsuario).subscribe(response => {
      console.log('Usuario creado con éxito', response);
    });
  }
  navigateToUsers(): void{
    this.router.navigate(['component/user']);
  }
}
