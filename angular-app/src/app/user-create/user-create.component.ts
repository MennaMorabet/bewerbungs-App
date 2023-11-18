import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../user.service";
import { User } from "../user.model";
import { tap } from 'rxjs';
import { FormsModule} from '@angular/forms';

@Component({
  imports:[FormsModule],
  selector: 'app-user-create',
  standalone: true,
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})

export class UserCreateComponent implements OnInit {

  user: User= new User();
  constructor(private userService: UserService, private router:Router){}
  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe({
     next:(data) =>{
      console.log(data);
      this.redirectToUserList();
     },
     error:(e)=>{
      console.log(e)
     }
    })
  }
   redirectToUserList(){
    this.router.navigate(['/users']);
   }
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }
}
