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

  // private base_url = 'http://localhost:3000/admin/api/';
  private base_url = 'api/';

  private users_endpoint = 'users';

  constructor(
    private http: HttpClient) { }


/** GET users from the server */
getUsers (): Observable<User[]> {
  return this.http.get<User[]>(this.base_url + this.users_endpoint)
    .pipe(
      catchError(this.handleError('getUsers', []))
    );
}

/**
   * POST: create a new user to the server
  */
 createUser(user: User): Observable<User> {
  return this.http.post<User>(this.base_url + this.users_endpoint, user, httpOptions)
    .pipe(
      catchError(this.handleError<User>('createUser'))
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