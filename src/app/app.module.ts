import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavComponent } from "./nav/nav.component";
import { LayoutModule } from "@angular/cdk/layout";

// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatButtonModule } from "@angular/material/button";
// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatIconModule } from "@angular/material/icon";
// import { MatListModule } from "@angular/material/list";

import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCardModule
} from "@angular/material/";

import { SpeechComponent } from "./speech/speech.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        SpeechComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        ServiceWorkerModule.register("ngsw-worker.js", {
            enabled: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
