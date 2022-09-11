import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NewsCreateComponent } from './components/news/news-create/news-create.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      {
        path: 'news',
        component: MainComponent,
        children: [
          { path: '', component: HomeComponent },
          { path: 'create', component: NewsCreateComponent },
          { path: ':id', component: NewsDetailComponent },
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
