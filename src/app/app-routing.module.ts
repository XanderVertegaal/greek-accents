import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { TextListComponent } from './text-list/text-list.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ArticleLessonComponent } from './article/article-lesson/article-lesson.component';
import { FirstDeclensionComponent } from './first-declension/first-declension.component';
import { ArticleExerciseComponent } from './article/article-exercise/article-exercise.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'texts', component: TextListComponent },
      { path: 'trainer', component: TrainerComponent },
      { path: 'course', component: CourseComponent },
      { path: 'article-lesson', component: ArticleLessonComponent },
      { path: 'article-exercise', component: ArticleExerciseComponent},
      { path: 'first-declension', component: FirstDeclensionComponent },
      { path: '**', redirectTo: 'texts' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
