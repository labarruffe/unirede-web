import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessLevelService {

  access_levels = [
    { name: 'Interno' },
    { name: 'Cliente' },
    { name: 'Administrador' }
  ];

  constructor() {
    this.getAccessLevels();
  }

  getAccessLevels(): Observable<object> {
    return of(this.access_levels);
  }
}
