import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { FootBarComponent } from './components/foot-bar/foot-bar.component';

const routes : Routes =[
  {path: "", component: HomeComponent},
  {path: "list", component: ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    TopNavBarComponent,
    FootBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
