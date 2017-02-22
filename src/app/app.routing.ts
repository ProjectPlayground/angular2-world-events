import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
export const appRoutes:Routes = [
  {
    path:'',
    loadChildren:() => require("./home/home.module")["HomeModule"],
    data:{title:"Home"}
  }
];
export const AppRouting:ModuleWithProviders = RouterModule.forRoot(appRoutes);
