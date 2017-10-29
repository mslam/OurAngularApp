import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'companies', component: CompanyComponent}
];

const routing = RouterModule.forRoot(routes, { enableTracing: true });


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
