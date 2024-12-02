import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SinterpolationComponent } from './component/sinterpolation/sinterpolation.component';
import { EbindingComponent } from './component/ebinding/ebinding.component';
import { PbindingComponent } from './component/pbinding/pbinding.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { IfComponent } from './components/if/if.component';
import { CHighlightDirective } from './directives/c-highlight.directive';
import { ComponentComponent } from './course/component/component.component';
import { CodingComponent } from './components/coding/coding.component';
import { HubComponent } from './components/hub/hub.component';
import { WebpageComponent } from './components/webpage/webpage.component';
import { LinkComponent } from './components/link/link.component';
import { ProductComponent } from './componenets/product/product.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './modules/angularmaterial/angularmaterial.module';
import { TdfComponent } from './components/tdf/tdf.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { SquarePipe } from './pipe/square.pipe';
import { Change2Interceptor } from './interceptors/change2.interceptor';
import { CourseService } from './service/course.service';

import { EmployeeService } from './employeeservice.service';
import { EmployeeComponent } from './employee/employee.component';

import { ProductsComponent } from './products/products.component';
import { CustomerComponent } from './customer/customer.component';
import { StudentComponent } from './student/student.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    SinterpolationComponent,
    EbindingComponent,
    PbindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    ParentComponent,
    ChildComponent,
    PagenotfoundComponent,
    IfComponent,
    CHighlightDirective,
    ComponentComponent,
    CodingComponent,
    HubComponent,
    WebpageComponent,
    LinkComponent,
    ProductComponent,
    TdfComponent,
    ReactiveformsComponent,
    SquarePipe,
    EmployeeComponent,
    HomeComponent,
    LinkComponent,
    ProductsComponent,
    CustomerComponent,
    StudentComponent,
    EmployeeRegistrationComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    ReactiveFormsModule
  ],
  
  providers: [CourseService,EmployeeService,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:Change2Interceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
