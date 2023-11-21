import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  imports: [NgForOf, NgIf],
  standalone: true,
  selector: 'app-user-List',
  templateUrl: './user-List.component.html',
  styleUrls: ['./user-list.component.css']

})
export class UserListComponent implements OnInit {
  users: User[] | undefined;
  userDeleted = false;

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userservice.getUserList()
      .pipe(tap(data => this.users = data))
      .subscribe();
  }

  updateUser(id: number) {
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number) {
    this.userservice.deleteUser(id)
      .pipe(tap(() => {
        this.users = this.users?.filter(user => user.id !== id);
        this.userDeleted = true;
      }))
      .subscribe();

  }
}


