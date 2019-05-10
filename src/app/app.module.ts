import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessorComponent } from './pages/processor/processor.component';
import { ClassifyService } from './service/classify.service';


@NgModule({
    declarations: [
        AppComponent,
        ProcessorComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    providers: [
        ClassifyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
