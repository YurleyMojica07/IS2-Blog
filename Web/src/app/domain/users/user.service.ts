import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "./user.model";
import {Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{

  apiUserUrl = 'http://127.0.0.1:8000/api/users/users/'

  constructor(private httpClient: HttpClient) {
  }

  createUser(usuario: UserModel): Observable<any> {
    return this.httpClient.post(this.apiUserUrl, usuario);
  }
  getAllUser(searchTerm?: string): Observable<UserModel[]> {
    // Si hay un término de búsqueda, construye la URL con el parámetro de consulta
    const url = searchTerm ? `${this.apiUserUrl}?search=${searchTerm}` : this.apiUserUrl;

    return this.httpClient.get<UserModel[]>(url);
  }
  deleteUser(userId: number): Observable<UserModel[]> {
    const url = `${this.apiUserUrl}${userId}/`;
    return this.httpClient.delete<UserModel[]>(url);
  }
  getUserById(userId: number): Observable<UserModel> {
    const url = `${this.apiUserUrl}${userId}/`;
    return this.httpClient.get<UserModel>(url);
  }
  updateUser(userId: number, userData: any): Observable<any> {
    const url = `${this.apiUserUrl}${userId}/`;
    return this.httpClient.put(url, userData);
  }
}
