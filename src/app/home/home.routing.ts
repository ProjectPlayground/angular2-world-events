import {Routes,  RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ModuleWithProviders} from "@angular/core";
const homeRoutes:Routes=[
  {
    path:'',component:HomeComponent
  }
];
export const HomeRouting:ModuleWithProviders = RouterModule.forChild(homeRoutes);
