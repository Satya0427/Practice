import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";

const routes:Routes = [
    {path:'user-register',component:RegisterComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class acessRoutingModule{

}