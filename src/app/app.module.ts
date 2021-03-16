import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SportsmanComponent } from './sportsman/sportsman.component';
import { EntertainerComponent } from './entertainer/entertainer.component';
import { TestComponent } from './test/test.component';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SportsmanComponent,
    EntertainerComponent,
    TestComponent,
    SqrtPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
