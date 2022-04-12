import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { TextListComponent } from './text-list/text-list.component';
import { TrainerComponent } from './trainer/trainer.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'texts', component: TextListComponent },
      { path: 'trainer', component: TrainerComponent },
      { path: 'rules', component: RulesComponent },
      { path: '**', redirectTo: 'texts' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
