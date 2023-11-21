import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { Router } from 'express';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'create-user', component: UserCreateComponent },
    { path: 'update-user/:id', component: UserUpdateComponent },
];
