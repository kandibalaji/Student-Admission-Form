import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PbindingComponent } from './component/pbinding/pbinding.component';
import { SinterpolationComponent } from './component/sinterpolation/sinterpolation.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { EbindingComponent } from './component/ebinding/ebinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { IfComponent } from './components/if/if.component';
import { ProductComponent } from './componenets/product/product.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:"string",component:SinterpolationComponent},
{path:"property",component:PbindingComponent},
{path:"class",component:ClassbindingComponent},
{path:"parent",component:PbindingComponent},
{path:"child",component:ClassbindingComponent},
{path:"event",component:EbindingComponent},
{path:"style",component:StylebindingComponent},
{path:"about-us",component:AboutUsComponent},
{path:"if",component:IfComponent},
{path:'product',component:ProductComponent},
{path:'tdf',component:TdfComponent},
{path:'reactiveforms',component:ReactiveformsComponent},
{path:'Employee',component:EmployeeComponent},
{path:'employee-registration',component:EmployeeRegistrationComponent},
{path:'Student',component:StudentComponent},

{path:'**',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
