import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleSectionComponent } from './pages/title-section/title-section.component';
import { UserReviewsComponent } from './pages/user-reviews/user-reviews.component';
import { SingleReviewCardComponent } from './pages/user-reviews/single-review-card/single-review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleSectionComponent,
    UserReviewsComponent,
    SingleReviewCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
