import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"
import { RouterModule} from "@angular/router";
import { HeaderClientComponent } from './components/header-client/header-client.component';
import { FooterClientComponent } from './components/footer-client/footer-client.component';

import { WorkPageComponent } from './pages/client/work-page/work-page.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';
import { BlogPageComponent } from './pages/client/blog-page/blog-page.component';
import { CategoryListComponent } from './pages/admin/category/category-list/category-list.component';
import { CategoryAddComponent } from './pages/admin/category/category-add/category-add.component';
import { PostsListComponent } from './pages/admin/posts/posts-list/posts-list.component';
import { PostAddComponent } from './pages/admin/posts/post-add/post-add.component';
import { ProjectsListComponent } from './pages/admin/projects/projects-list/projects-list.component';
import { ProjectAddComponent } from './pages/admin/projects/project-add/project-add.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { UserAddComponent } from './pages/admin/users/user-add/user-add.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderClientComponent,
    FooterClientComponent,
    HomePageComponent,
    BlogPageComponent,
    WorkPageComponent,
    CategoryListComponent,
    CategoryAddComponent,
    PostsListComponent,
    PostAddComponent,
    ProjectsListComponent,
    ProjectAddComponent,
    UsersListComponent,
    UserAddComponent,
    DashboardComponent,
    NavbarComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
