import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsCreateComponent } from './components/news/news-create/news-create.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  {
    path: 'news',
    component: AppComponent,
    children: [
      { path: ':id', component: NewsDetailComponent },
      { path: 'create', component: NewsCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
