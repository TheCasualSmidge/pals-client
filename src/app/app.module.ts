import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { MapComponent } from './pages/map/map.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/authorization/login/login.component';
import { SignUpComponent } from './pages/authorization/sign-up/sign-up.component';
import { AccountComponent } from './components/account/account.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AuthorizationComponent,
    MapComponent,
    NewsFeedComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    AccountComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
