import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { SigninComponent } from "./components/logic/pages/signin/signin.component";
import { WelcomeComponent } from "./components/logic/pages/welcome/welcome.component";
import { SignupComponent } from "./components/logic/pages/signup/signup.component";

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
