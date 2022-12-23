import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ToneSelectFormComponent } from './exercise/tone-select-form/tone-select-form.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TextListComponent } from './text-list/text-list.component';
import { TrainerComponent } from './trainer/trainer.component';
import { CourseComponent } from './course/course.component';
import { ArticleLessonComponent } from './article/article-lesson/article-lesson.component';
import { SelectedComponent } from './selected/selected.component';
import { FirstDeclensionNounsComponent } from './first-declension-nouns/first-declension-nouns.component';
import { ArticleExerciseComponent } from './article/article-exercise/article-exercise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './exercise/form-input/form-input.component';
import { ConversionTableComponent } from './shared/components/conversion-table/conversion-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrimPipe } from './shared/trim.pipe';
import { RemoveAccentPipe } from './shared/remove-accent.pipe';
import { AddAccentPipe } from './shared/add-accent.pipe';
import { CourseOverviewComponent } from './course/course-overview/course-overview.component';
import { FirstDeclensionLessonComponent } from './first-declension/first-declension-lesson/first-declension-lesson.component';
import { FirstDeclensionExerciseComponent } from './first-declension/first-declension-exercise/first-declension-exercise.component';
import { TooltipDirective } from './shared/tooltip.directive';
import { TrainerSelectedComponent } from './trainer/trainer-selected/trainer-selected.component';
import { ToggleSwitchComponent } from './shared/components/toggle-switch/toggle-switch.component';
import { SummaryComponent } from './summary/summary.component';
import { SecondDeclensionLessonComponent } from './second-declension/second-declension-lesson/second-declension-lesson.component';
import { SecondDeclensionExerciseComponent } from './second-declension/second-declension-exercise/second-declension-exercise.component';

@NgModule({
  declarations: [
    AddAccentPipe,
    AppComponent,
    ArticleExerciseComponent,
    ArticleLessonComponent,
    ConversionTableComponent,
    CourseComponent,
    FirstDeclensionNounsComponent,
    FormInputComponent,
    HomeComponent,
    NotificationsComponent,
    RemoveAccentPipe,
    ScoreboardComponent,
    SelectedComponent,
    TextListComponent,
    ToneSelectFormComponent,
    TrainerComponent,
    TrimPipe,
    CourseOverviewComponent,
    FirstDeclensionLessonComponent,
    FirstDeclensionExerciseComponent,
    TooltipDirective,
    TrainerSelectedComponent,
    ToggleSwitchComponent,
    SummaryComponent,
    SecondDeclensionLessonComponent,
    SecondDeclensionExerciseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TrimPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
