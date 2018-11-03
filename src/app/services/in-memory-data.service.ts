import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, login: 'fulano', password: 'abc123', access_level: 'interno' },
      { id: 2, login: 'ciclano', password: 'abc123', access_level: 'cliente' },
      { id: 3, login: 'beltrano', password: 'abc123', access_level: 'administrador' },
      { id: 4, login: 'silva', password: 'abc123', access_level: 'interno' },
      { id: 5, login: 'guedes', password: 'abc123', access_level: 'administrador' },
      { id: 6, login: 'meira', password: 'abc123', access_level: 'cliente' },
      { id: 7, login: 'brito', password: 'abc123', access_level: 'interno' },
      { id: 8, login: 'neli', password: 'abc123', access_level: 'administrador' },
    ];
    return { users };
  }
}
