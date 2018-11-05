import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AccessLevelService } from 'src/app/services/access-level.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-creation-edition',
  templateUrl: './user-creation-edition.component.html',
  styleUrls: ['./user-creation-edition.component.css']
})
export class UserCreationEditionComponent implements OnInit {

  users: User[];
  user: User;
  access_level_select: string;
  access_levels = {};

  constructor(
    private userService: UserService,
    private accessLevelService: AccessLevelService,
    private route: ActivatedRoute,
    private location: Location ) { }

  ngOnInit() {
    this.getAccessLevels();
    this.getUser();
  }

  getAccessLevels(): void {
    this.accessLevelService.getAccessLevels().subscribe(
      result => this.access_levels = result);
  }

  createUser(login: string, password: string, access_level: string): void {
    this.userService.createUser({ login, password, access_level } as User).subscribe(
      user => this.users.push(user));
    }

  getUser(): void {
    this.route.queryParams.subscribe(params => {
      if (params.action === 'editar') {
        if (params.id) {
          this.userService.getUser(params.id).subscribe(
            user => this.user = user
            );
        } else {
          console.log(`ID param from url is empty!`);
        }
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      () => this.goBack());
  }
}
