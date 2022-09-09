import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';

import { NewsCardComponent } from './components/molecules/news-card/news-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,

    //MOLECULES
    NewsCardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
