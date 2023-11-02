import {Component, OnInit} from '@angular/core';
import {UserService} from "../../domain/users/user.service";
import {UserModel} from "../../domain/users/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  listUsers: UserModel[] = [];

  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      this.listUsers = data;
    });
    }
    deleteUser(userId: number): void {
      this.userService.deleteUser(userId).subscribe(data => {
        this.listUsers = data;
      });

  }
}
