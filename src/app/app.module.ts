import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleSectionComponent } from './pages/title-section/title-section.component';
import { UserReviewsComponent } from './pages/user-reviews/user-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleSectionComponent,
    UserReviewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
