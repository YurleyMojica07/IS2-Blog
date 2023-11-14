import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './user/createuser/create-user.component';
import { UpdateUserComponent } from './user/updateuser/updateuser.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
})
export class ComponentsModule { }
