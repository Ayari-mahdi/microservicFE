import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { ActivateAccountComponent } from './Auth/activate-account/activate-account.component';
import { MainPageComponent } from './Landing/main-page/main-page.component';
import { AuthComponent } from './Auth/auth.component';
import { NgSelectModule } from "@ng-select/ng-select";
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
//import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { MatInputModule } from '@angular/material/input';
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PostRegistrationComponent } from './Auth/post-registration/post-registration.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgApexchartsModule} from 'ng-apexcharts';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DashboardComponent } from './allPages/dashboard/dashboard.component';
import { EnqueteQTVComponent } from './allPages/dashboardcards/enquete-qtv/enquete-qtv.component';
import { EnqueteRPSComponent } from './allPages/dashboardcards/enquete-rps/enquete-rps.component';
import { EnquetepersonnalisableComponent } from './allPages/dashboardcards/enquetepersonnalisable/enquetepersonnalisable.component';
import { AnalysemessagerieComponent } from './allPages/dashboardcards/analysemessagerie/analysemessagerie.component';
import { VueentrepriseComponent } from './allPages/dashboardcards/vueentreprise/vueentreprise.component';
import { PortaildeclaratifComponent } from './allPages/dashboardcards/portaildeclaratif/portaildeclaratif.component';
import { PageswrapperComponent } from './allPages/pageswrapper/pageswrapper.component';
import { SidenavbarComponent } from './allPages/sidenavbar/sidenavbar.component';
import { HeaderComponent } from './allPages/header/header.component';
import { QVTComponent } from './allPages/configurationEnquete/qvt/qvt.component';
import { RPSComponent } from './allPages/configurationEnquete/rps/rps.component';
import { PersonnalisableComponent } from './allPages/configurationEnquete/personnalisable/personnalisable.component';
import { QuesPersonnalisableComponent } from './allPages/Questionnaires/ques-personnalisable/ques-personnalisable.component';
import { QUESRPSComponent } from './allPages/Questionnaires/quesrps/quesrps.component';
import { QUESQVTComponent } from './allPages/Questionnaires/quesqvt/quesqvt.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import { AddEnqueteQVTComponent } from './allPages/configurationEnquete/add-enquete-qvt/add-enquete-qvt.component';
import { AddEnqueteRPSComponent } from './allPages/configurationEnquete/add-enquete-rps/add-enquete-rps.component';
import { AddEnquetePersoComponent } from './allPages/configurationEnquete/add-enquete-perso/add-enquete-perso.component';
import { ModelekarasekComponent } from './allPages/tabdebordEnquete/modelekarasek/modelekarasek.component';
import { ModelesiergristComponent } from './allPages/tabdebordEnquete/modelesiergrist/modelesiergrist.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ActivateAccountComponent,
    MainPageComponent,
    AuthComponent,
    PostRegistrationComponent,
    ResetPasswordComponent,
    DashboardComponent,
    EnqueteQTVComponent,
    EnqueteRPSComponent,
    EnquetepersonnalisableComponent,
    AnalysemessagerieComponent,
    VueentrepriseComponent,
    PortaildeclaratifComponent,
    PageswrapperComponent,
    SidenavbarComponent,
    HeaderComponent,
    QVTComponent,
    RPSComponent,
    PersonnalisableComponent,
    QuesPersonnalisableComponent,
    QUESRPSComponent,
    QUESQVTComponent,
    AddEnqueteQVTComponent,
    AddEnqueteRPSComponent,
    AddEnquetePersoComponent,
    ModelekarasekComponent,
    ModelesiergristComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule,
    MatPasswordStrengthModule.forRoot(),
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgApexchartsModule,
    NgxCaptchaModule,
    MatMenuModule,
    MatPaginatorModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
