import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './startup/login/login.component';
import { RegisterComponent } from './startup/register/register.component';
import { StartupComponent } from './startup/startup.component';
import { YouComponent } from './home/you/you.component';
import { FriendsComponent } from './home/friends/friends.component';
import { MessagesComponent } from './home/messages/messages.component';
import { ProfileComponent } from './home/profile/profile.component';
import { DiscoverComponent } from './home/discover/discover.component';

const routes: Routes = [
  {path: 'homeComponent', component: HomeComponent,
  children: [
    {path: 'youComponent', component: YouComponent},
    {path: 'friendsComponent', component: FriendsComponent},
    {path: 'messagesComponent', component: MessagesComponent},
    {path: 'profileComponent', component: ProfileComponent},
    {path: 'discoverComponent', component: DiscoverComponent}
  ]},

  {path: 'startupComponent', component: StartupComponent,
  children: [
    {path: 'loginComponent', component: LoginComponent},
    {path: 'registerComponent', component: RegisterComponent},

  ]},

  { path: '', redirectTo: '/startupComponent/loginComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
