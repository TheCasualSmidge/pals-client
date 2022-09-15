import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from '@helpers/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from '@components/alert/alert.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        PagesModule
    ],
    declarations: [
        AppComponent,
        AlertComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };