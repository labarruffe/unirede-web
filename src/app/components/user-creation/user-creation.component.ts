import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AccessLevelService } from 'src/app/services/access-level.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  users: User[];
  access_level_select: string;
  access_levels = {};

  constructor(
    private userService: UserService,
    private accessLevelService: AccessLevelService ) { }

  ngOnInit() {
    this.getAccessLevels();
  }

  getAccessLevels(): void {
    this.accessLevelService.getAccessLevels().subscribe(
      result => this.access_levels = result);
  }

  createUser(login: string, password: string, access_level: string): void {
    this.userService.createUser({ login, password, access_level } as User).subscribe(
      user => { this.users.push(user);
    });
  }

}
