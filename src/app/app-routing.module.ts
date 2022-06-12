import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './pages/admin/category/category-add/category-add.component';
import { CategoryListComponent } from './pages/admin/category/category-list/category-list.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { PostAddComponent } from './pages/admin/posts/post-add/post-add.component';
import { PostsListComponent } from './pages/admin/posts/posts-list/posts-list.component';
import { ProjectAddComponent } from './pages/admin/projects/project-add/project-add.component';
import { ProjectsListComponent } from './pages/admin/projects/projects-list/projects-list.component';
import { UserAddComponent } from './pages/admin/users/user-add/user-add.component';
import { UsersListComponent } from './pages/admin/users/users-list/users-list.component';
import { BlogPageComponent } from './pages/client/blog-page/blog-page.component';
import { HomePageComponent } from './pages/client/home-page/home-page.component';

import { WorkPageComponent } from './pages/client/work-page/work-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'work', component: WorkPageComponent },

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
        ],
      },
    //   user
    {
        path: 'user',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: UsersListComponent },
          { path: 'create', component: UserAddComponent },
        ],
      },

    //   category
    {
        path: 'categories',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: CategoryListComponent },
          { path: 'create', component: CategoryAddComponent },
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
