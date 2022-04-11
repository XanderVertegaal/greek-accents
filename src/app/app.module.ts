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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrimPipe,
    ToneSelectFormComponent,
    ScoreboardComponent,
    NotificationsComponent,
    TextListComponent,
    TrainerComponent
  ],
  imports: [
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
