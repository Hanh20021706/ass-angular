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
import { PostsListComponent } from './pages/admin/posts/posts-list/posts-list.component';
import { PostAddComponent } from './pages/admin/posts/post-add/post-add.component';
import { ProjectsListComponent } from './pages/admin/projects/projects-list/projects-list.component';
import { ProjectAddComponent } from './pages/admin/projects/project-add/project-add.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { UserAddComponent } from './pages/admin/users/user-add/user-add.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryPostListComponent } from './pages/admin/category/category-post-list/category-post-list.component';
import { CategoryPostAddComponent } from './pages/admin/category/category-post-add/category-post-add.component';
import { CategoryProjectListComponent } from './pages/admin/category/category-project-list/category-project-list.component';
import { CategoryProjectAddComponent } from './pages/admin/category/category-project-add/category-project-add.component';
import { PostHomeComponent } from './components/post-home/post-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { WorkHomeComponent } from './components/work-home/work-home.component';
import { DetailWorkComponent } from './pages/client/detail-work/detail-work.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderClientComponent,
    FooterClientComponent,
    HomePageComponent,
    BlogPageComponent,
    WorkPageComponent,
    PostsListComponent,
    PostAddComponent,
    ProjectsListComponent,
    ProjectAddComponent,
    UsersListComponent,
    UserAddComponent,
    DashboardComponent,
    NavbarComponent,
    CategoryPostListComponent,
    CategoryPostAddComponent,
    CategoryProjectListComponent,
    CategoryProjectAddComponent,
    PostHomeComponent,
    UserHomeComponent,
    WorkHomeComponent,
    DetailWorkComponent,

  
    
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
