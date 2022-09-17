import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeMap } from './shared/state';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TrimPipe } from './trim.pipe';
import { ToneSelectFormComponent } from './exercise/tone-select-form/tone-select-form.component';
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
import { ConversionTableComponent } from './shared/components/conversion-table/conversion-table.component';
import { BrowserAnimationsModule } from 'node_modules/@angular/platform-browser/animations';

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
    ConversionTableComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(storeMap),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [TrimPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
