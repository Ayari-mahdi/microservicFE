import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquetePersoComponent } from './allPages/configurationEnquete/add-enquete-perso/add-enquete-perso.component';
import { AddEnqueteQVTComponent } from './allPages/configurationEnquete/add-enquete-qvt/add-enquete-qvt.component';
import { AddEnqueteRPSComponent } from './allPages/configurationEnquete/add-enquete-rps/add-enquete-rps.component';
import { PersonnalisableComponent } from './allPages/configurationEnquete/personnalisable/personnalisable.component';
import { QVTComponent } from './allPages/configurationEnquete/qvt/qvt.component';
import { RPSComponent } from './allPages/configurationEnquete/rps/rps.component';
import { PageswrapperComponent } from './allPages/pageswrapper/pageswrapper.component';
import { ModelekarasekComponent } from './allPages/tabdebordEnquete/modelekarasek/modelekarasek.component';
import { AuthComponent } from './Auth/auth.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ResetPasswordComponent } from './Auth/reset-password/reset-password.component';
import { MainPageComponent } from './Landing/main-page/main-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component:MainPageComponent,},
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:'pages',component:PageswrapperComponent,
  children : [
    { 
      path: '',component:ModelekarasekComponent
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
              path: 'reset-password',
              canActivate:[AuthGuard],
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
