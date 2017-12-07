//old import { MessageService } from './_services/index';
//old import { ConfigService } from './_services/config.service';
import { MessageService } from './_services/message.service'; // new

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertService} from './shared/alert/alert.service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';


@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
 // declarations: [LoggeduserComponent],
  //declarations: [UserComponent, LoginuserComponent, SignupuserComponent]
})
export class MaterialModule {}

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import {CompanyService} from "./shared/company/company.service";
import {SignupuserService} from "./shared/signupuser/signupuser.service";
import {LoginuserService} from "./shared/loginuser/loginuser.service";
import {ContextService} from "./shared/context/context.service";
import { UserComponent } from './user/user.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { LoggeduserComponent } from './loggeduser/loggeduser.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'companies', component: CompanyComponent},
  { path: 'companies/:id/users', component: UserComponent},
  { path: 'main', component: LoginuserComponent},
  { path: 'signupuser', component: SignupuserComponent },
  { path: 'signupuser/:signup_user_id/users', component: UserComponent},
  { path: 'loggeduser', component: LoggeduserComponent}
];

const routing = RouterModule.forRoot(routes, { enableTracing: true });


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomeComponent,
    UserComponent,
    LoginuserComponent,
    SignupuserComponent,
    LoggeduserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule.forRoot()
  ],
  providers: [CompanyService,
              ContextService,
              SignupuserService,
              LoginuserService,
             // LoggeduserService,
              MessageService,
              //old ConfigService,
              AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
