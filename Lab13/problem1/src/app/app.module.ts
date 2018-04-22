import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DbService} from "app/db.service";
import {ProfileComponent} from './profile/profile.component';
import {ErrorComponent} from './error/error.component';
import {ProfileGuard} from "app/profile.guard";

const ROUTES: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'profile/:id', component: ProfileComponent, canActivate: [ProfileGuard]},
  {path: 'profile', redirectTo: 'error'},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    HomepageComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DbService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
