import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "./components/components.module";
import { GalleryComponent } from './gallery/gallery.component';
import { DiningComponent } from './dining/dining.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        DiningComponent,
        AboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
