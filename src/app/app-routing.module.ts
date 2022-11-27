import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TextListComponent } from './text-list/text-list.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ArticleLessonComponent } from './article/article-lesson/article-lesson.component';
import { ArticleExerciseComponent } from './article/article-exercise/article-exercise.component';
import { CourseOverviewComponent } from './course/course-overview/course-overview.component';
import { FirstDeclensionLessonComponent } from './first-declension/first-declension-lesson/first-declension-lesson.component';
import { FirstDeclensionExerciseComponent } from './first-declension/first-declension-exercise/first-declension-exercise.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'texts', component: TextListComponent },
      { path: 'trainer', component: TrainerComponent },
      { path: 'course', component: CourseComponent, children: [
        { path: 'overview', component: CourseOverviewComponent},
        { path: 'article-lesson', component: ArticleLessonComponent },
        { path: 'article-exercise', component: ArticleExerciseComponent },
        { path: 'first-declension-lesson', component: FirstDeclensionLessonComponent },
        { path: 'first-declension-exercise', component: FirstDeclensionExerciseComponent},
        { path: '', pathMatch: 'full', redirectTo: 'overview'}
      ] },
      { path: '**', redirectTo: 'trainer' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
