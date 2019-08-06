import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Route[] = [
    { path:"",component:LoginComponent},
    { path:"student", loadChildren:"./student/student.module#StudentModule"},
    { path:"manager", loadChildren:"./manager/manager.module#ManagerModule"}
]
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}