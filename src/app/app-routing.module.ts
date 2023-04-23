import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitoyenComponent } from './allPages/Microservices/citoyen/citoyen.component';
import { MunicipaliteComponent } from './allPages/Microservices/municipalite/municipalite.component';
import { ReclamationComponent } from './allPages/Microservices/reclamation/reclamation.component';
import { ServicesComponent } from './allPages/Microservices/services/services.component';
import { UsersComponent } from './allPages/Microservices/users/users.component';

import { PageswrapperComponent } from './allPages/pageswrapper/pageswrapper.component';
import { HomepageComponent } from './allPages/tabdebordEnquete/homepage/homepage.component';
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
      path: '',redirectTo:'homepage',pathMatch:'full'
    },
    { 
      path: 'homepage',component:HomepageComponent
    },
    { 
      path: 'users',component:UsersComponent
    },
   
    { 
      path: 'citoyen',component:CitoyenComponent
    },
    { 
      path: 'municipalite',component:MunicipaliteComponent
    },
    { 
      path: 'services',component:ServicesComponent
    },
    { 
      path: 'reclamation',component:ReclamationComponent
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
