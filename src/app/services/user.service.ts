import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url = 'http://localhost:3000/unirededb';
  // private base_url = 'api/';

  constructor(
    private http: HttpClient) { }


  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.base_url + '/users').pipe(
      catchError(this.handleError('getUsers', []))
    );
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: string | number): Observable<User> {
    const url = `${this.base_url} /user/ ${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /**
   * POST: create a new user to the server
  */
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.base_url + '/user', user, httpOptions).pipe(
      catchError(this.handleError<User>('createUser'))
    );
  }

  /** DELETE: delete the user from the server */
  deleteUser (id: string): Observable<User[]> {
    const url = `${this.base_url}/user/${id}`;
    return this.http.delete<User[]>(url).pipe(
      catchError(this.handleError<User[]>(`deleteUser id=${id}`))
    );
  }

  /** PATCH: update the user on the server */
  updateUser (user: User): Observable<any> {
    return this.http.put(this.base_url + '/user', user, httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user c
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
