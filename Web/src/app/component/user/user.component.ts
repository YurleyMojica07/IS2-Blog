import { Component, OnInit } from '@angular/core';
import { UserService } from "../../domain/users/user.service";
import { UserModel } from "../../domain/users/user.model";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  searchTerm: string = '';
  listUsers$: Observable<UserModel[]>;


  constructor(private userService: UserService, private router: Router) {
    this.listUsers$ = this.userService.getAllUser();
  }

  ngOnInit(): void {
    this.refreshUserList();
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(() => {
      this.refreshUserList();
    });
  }

  private refreshUserList(): void {
    this.listUsers$ = this.userService.getAllUser(this.searchTerm);
  }

  navigateToCreateUser(): void {
    this.router.navigate(['component/createUser']);

  }
  navigateToUpdateUser(userId?: number): void{
    this.router.navigate(['component/updateUser', {userId}]);
  }
  applySearch(): void {
    this.refreshUserList();
  }
  shouldShowUser(user: UserModel): boolean {
    if (!this.searchTerm) {
      // Si no hay término de búsqueda, mostrar todos los usuarios
      return true;
    }

    // Convertir los valores a minúsculas para hacer la búsqueda insensible a mayúsculas
    const searchTermLowerCase = this.searchTerm.toLowerCase();
    const userFullName = `${user.firstName} ${user.secondName}`.toLowerCase();

    // Verificar si el término de búsqueda está en el nombre completo del usuario
    return userFullName.includes(searchTermLowerCase);
  }
}
