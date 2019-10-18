import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SigninComponent } from './components/logic/pages/signin/signin.component';
import { UiModule } from "./components/ui/ui.module";
import { WelcomeComponent } from './components/logic/pages/welcome/welcome.component';
import { SignupComponent } from './components/logic/pages/signup/signup.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    UiModule
  ],
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    SignupComponent
  ],
  providers: [],
  schemas: [
      NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
