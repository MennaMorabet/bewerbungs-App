import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../user.service";
import { User } from "../user.model";
import { tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-user-create',
  standalone: true,
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})

export class UserCreateComponent {

  user: User = new User();
  constructor(private userService: UserService, private router: Router) { }

  saveUser() {
    this.userService.createUser(this.user)
      .pipe(tap(user => {
        console.log(user);
        this.redirectToUserList();
      }))
      .subscribe();
  }

  redirectToUserList() {
    this.router.navigate(['/users']);
  }
  
  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
