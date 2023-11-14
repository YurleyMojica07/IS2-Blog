import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/domain/users/user.model';
import { UserService } from 'src/app/domain/users/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateUserComponent implements OnInit {
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

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['userId'];

    if (userId) {
      this.userService.getUserById(userId).subscribe(user => {
        this.nuevoUsuario = user;
      });
    }
  }

  submitForm() {
    this.userService.updateUser(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(
      response => {
        console.log('Usuario actualizado con éxito', response);
        this.navigateToUsers(); // Puedes redirigir después de la actualización si es necesario
      },
      error => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  navigateToUsers(): void {
    this.router.navigate(['component/user']);
  }
}

