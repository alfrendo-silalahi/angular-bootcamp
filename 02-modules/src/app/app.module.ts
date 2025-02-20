import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
// import { DatePipe } from '@angular/common'; // DatePipe is included on AppModule
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/SharedModule';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, UserComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
