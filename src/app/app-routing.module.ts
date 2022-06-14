import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPostAddComponent } from './pages/admin/category/category-post-add/category-post-add.component';
import { CategoryPostListComponent } from './pages/admin/category/category-post-list/category-post-list.component';
import { CategoryProjectAddComponent } from './pages/admin/category/category-project-add/category-project-add.component';
import { CategoryProjectListComponent } from './pages/admin/category/category-project-list/category-project-list.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PostAddComponent } from './pages/admin/posts/post-add/post-add.component';
import { PostsListComponent } from './pages/admin/posts/posts-list/posts-list.component';
import { ProjectAddComponent } from './pages/admin/projects/project-add/project-add.component';
import { ProjectsListComponent } from './pages/admin/projects/projects-list/projects-list.component';
import { UserAddComponent } from './pages/admin/users/user-add/user-add.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { BlogPageComponent } from './pages/client/blog-page/blog-page.component';
import { DetailWorkComponent } from './pages/client/detail-work/detail-work.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';

import { WorkPageComponent } from './pages/client/work-page/work-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'work', component: WorkPageComponent },
  { path: 'work/:id', component: DetailWorkComponent },

  // admin
  {
    path: 'admin',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    //   post
      {
        path: 'posts',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: PostsListComponent },
          { path: 'create', component: PostAddComponent },
          { path: 'edit/:id', component: PostAddComponent },
        ],
      },
    //   project
      {
        path: 'projects',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: ProjectsListComponent },
          { path: 'create', component: ProjectAddComponent },
          { path: 'edit/:id', component: ProjectAddComponent },
        ],
      },
    //   user
    {
        path: 'user',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: UsersListComponent },
          { path: 'create', component: UserAddComponent },
          { path: 'edit/:id', component: UserAddComponent },
        ],
      },

    //   category posts
    {
        path: 'categories/posts',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: CategoryPostListComponent },
          { path: 'create', component: CategoryPostAddComponent },
          { path: 'edit/:id', component: CategoryPostAddComponent },
        ],
      },

      // category proejct
    {
        path: 'categories/projects',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: CategoryProjectListComponent },
          { path: 'create', component: CategoryProjectAddComponent },
          { path: 'edit/:id', component: CategoryProjectAddComponent },
      
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
