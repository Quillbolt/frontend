import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "./components/components.module";
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';

import {NgxPrintModule} from 'ngx-print';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GalleryComponent,
        AboutComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        NgxPrintModule,
        BrowserAnimationsModule,
    ]
})
export class AppModule { }
