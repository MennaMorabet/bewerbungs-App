import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  providers:[HttpClientModule, UserService],
  imports: [ RouterOutlet, HttpClientModule, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}
