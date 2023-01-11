import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './startup/login/login.component';
import { RegisterComponent } from './startup/register/register.component';
import { StartupComponent } from './startup/startup.component';
import { YouComponent } from './home/you/you.component';
import { FriendsComponent } from './home/friends/friends.component';
import { MessagesComponent } from './home/messages/messages.component';
import { ProfileComponent } from './home/profile/profile.component';
import { DiscoverComponent } from './home/discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StartupComponent,
    YouComponent,
    FriendsComponent,
    MessagesComponent,
    ProfileComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
