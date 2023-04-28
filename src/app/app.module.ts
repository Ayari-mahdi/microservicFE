import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgApexchartsModule} from 'ng-apexcharts';
import { NgxCaptchaModule } from 'ngx-captcha';
import { PageswrapperComponent } from './allPages/pageswrapper/pageswrapper.component';
import { SidenavbarComponent } from './allPages/sidenavbar/sidenavbar.component';
import { HeaderComponent } from './allPages/header/header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRippleModule} from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardcardComponent } from './allPages/dashboardcards/dashboardcard/dashboardcard.component';
import { HomepageComponent } from './allPages/tabdebordEnquete/homepage/homepage.component';
import { HomepagecardComponent } from './allPages/tabdebordEnquete/homepagecard/homepagecard.component';
import { UsersComponent } from './allPages/Microservices/users/users.component';
import { MunicipaliteComponent } from './allPages/Microservices/municipalite/municipalite.component';
import { CitoyenComponent } from './allPages/Microservices/citoyen/citoyen.component';
import { ServicesComponent } from './allPages/Microservices/services/services.component';
import { ReclamationComponent } from './allPages/Microservices/reclamation/reclamation.component';
import { AdduserComponent } from './allPages/Microservices/users/adduser/adduser.component';
import { AddmunicipaliteComponent } from './allPages/Microservices/municipalite/addmunicipalite/addmunicipalite.component';
import { AddcitoyenComponent } from './allPages/Microservices/citoyen/addcitoyen/addcitoyen.component';
import { AddlandingserviceComponent } from './Landing/addlandingservice/addlandingservice.component';
import { AddlandingreclamationComponent } from './Landing/addlandingreclamation/addlandingreclamation.component';
import {MatProgressBarModule } from '@angular/material/progress-bar'
import { InterceptorService } from './serivces/interceptor/interceptor.service';
import { ListcitoyeninmunicipComponent } from './allPages/Microservices/municipalite/listcitoyeninmunicip/listcitoyeninmunicip/listcitoyeninmunicip.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    AuthComponent,
    ResetPasswordComponent,
    PageswrapperComponent,
    SidenavbarComponent,
    HeaderComponent,
    DashboardcardComponent,
    HomepageComponent,
    HomepagecardComponent,
    UsersComponent,
    MunicipaliteComponent,
    CitoyenComponent,
    ServicesComponent,
    ReclamationComponent,
    AdduserComponent,
    AddmunicipaliteComponent,
    AddcitoyenComponent,
    AddlandingserviceComponent,
    AddlandingreclamationComponent,
    ListcitoyeninmunicipComponent,
    
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
    MatRippleModule,
    MatProgressBarModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
