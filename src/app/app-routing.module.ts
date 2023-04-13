import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquetePersoComponent } from './allPages/configurationEnquete/add-enquete-perso/add-enquete-perso.component';
import { AddEnqueteQVTComponent } from './allPages/configurationEnquete/add-enquete-qvt/add-enquete-qvt.component';
import { AddEnqueteRPSComponent } from './allPages/configurationEnquete/add-enquete-rps/add-enquete-rps.component';
import { PersonnalisableComponent } from './allPages/configurationEnquete/personnalisable/personnalisable.component';
import { QVTComponent } from './allPages/configurationEnquete/qvt/qvt.component';
import { RPSComponent } from './allPages/configurationEnquete/rps/rps.component';
import { DashboardComponent } from './allPages/dashboard/dashboard.component';
import { PageswrapperComponent } from './allPages/pageswrapper/pageswrapper.component';
import { QuesPersonnalisableComponent } from './allPages/Questionnaires/ques-personnalisable/ques-personnalisable.component';
import { QUESQVTComponent } from './allPages/Questionnaires/quesqvt/quesqvt.component';
import { QUESRPSComponent } from './allPages/Questionnaires/quesrps/quesrps.component';
import { ModelekarasekComponent } from './allPages/tabdebordEnquete/modelekarasek/modelekarasek.component';
import { ModelesiergristComponent } from './allPages/tabdebordEnquete/modelesiergrist/modelesiergrist.component';
import { ActivateAccountComponent } from './Auth/activate-account/activate-account.component';
import { AuthComponent } from './Auth/auth.component';
import { ForgetPasswordComponent } from './Auth/forget-password/forget-password.component';
import { LoginComponent } from './Auth/login/login.component';
import { PostRegistrationComponent } from './Auth/post-registration/post-registration.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';
import { MainPageComponent } from './Landing/main-page/main-page.component';

const routes: Routes = [
  { path: 'test', component:ActivateAccountComponent,},
  { path: 'home', component:MainPageComponent,},
  {path:'',redirectTo:'home', pathMatch: 'full' },
  //{ path: 'dashboard', component:DashboardComponent,},
  { path: 'dashboard', redirectTo:'home', pathMatch: 'full' },
  {path:'pages',component:PageswrapperComponent,
  children : [
    { 
      path: '',
      redirectTo: 'modelekarasek', pathMatch: 'full'
    },
    { 
      path: 'configurationQVT',component:QVTComponent   
    },
    { 
      path: 'configurationRPS',component:RPSComponent   
    },
    { 
      path: 'configurationPerso',component:PersonnalisableComponent   
    },
    { 
      path: 'QuestionnaireQVT',component:QUESQVTComponent   
    },
    { 
      path: 'QuestionnaireRPS',component:QUESRPSComponent   
    },
    { 
      path: 'QuestionnairePerso',component:QuesPersonnalisableComponent
    },
    { 
      path: 'addEnqueteQVT',component:AddEnqueteQVTComponent
    },

  { 
      path: 'addEnqueteRPS',component:AddEnqueteRPSComponent
    },
    { 
      path: 'addEnquetePerso',component:AddEnquetePersoComponent
    },
    { 
      path: 'modelekarasek',component:ModelekarasekComponent
    },
    { 
      path: 'modelesiergrist',component:ModelesiergristComponent
    },
  ]
},
  { path: 'auth',
   component:AuthComponent,  
  children : [
          { 
            path: '',
            redirectTo: 'login', pathMatch: 'full'
          },
          { 
            path: 'login',
            component:LoginComponent  
            },

          { 
              path: 'register', 
              component: RegisterComponent ,
            },
            { 
              path: 'forget-pw', 
              component: ForgetPasswordComponent ,
            },
            { 
              path: 'postregistration', 
              component: PostRegistrationComponent ,
            },
            {
              path: 'reset-password',
              component: ResetPasswordComponent
            }
 ]
},

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
