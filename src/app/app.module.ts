import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreMap } from './shared/state';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TrimPipe } from './trim.pipe';
import { ToneSelectFormComponent } from './tone-select-form/tone-select-form.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TextListComponent } from './text-list/text-list.component';
import { TrainerComponent } from './trainer/trainer.component';
import { CourseComponent } from './course/course.component';
import { ArticleLessonComponent } from './article/article-lesson/article-lesson.component';
import { SelectedComponent } from './selected/selected.component';
import { FirstDeclensionComponent } from './first-declension/first-declension.component';
import { FirstDeclensionNounsComponent } from './tables/first-declension-nouns/first-declension-nouns.component';
import { ArticleExerciseComponent } from './article/article-exercise/article-exercise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './exercise/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrimPipe,
    ToneSelectFormComponent,
    ScoreboardComponent,
    NotificationsComponent,
    TextListComponent,
    TrainerComponent,
    CourseComponent,
    ArticleLessonComponent,
    SelectedComponent,
    FirstDeclensionComponent,
    FirstDeclensionNounsComponent,
    ArticleExerciseComponent,
    FormInputComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(StoreMap),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
