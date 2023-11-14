import { Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {CreateUserComponent} from "./user/createuser/create-user.component";
import {UpdateUserComponent} from "./user/updateuser/updateuser.component";


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'createUser',
				component: CreateUserComponent
			},
      {
        path: 'updateUser',
        component: UpdateUserComponent
      },
      {
        path: 'user',
        component: UserComponent
      },



		]
	}
];
