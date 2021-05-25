import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {HeaderComponent} from './components/header/header.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {LoginComponent} from './components/login/login.component';
import {ArticlesComponent} from './components/articles/articles.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {Article1Component} from './components/articles/components/article1/article1.component';
import {Article2Component} from './components/articles/components/article2/article2.component';
import {Article3Component} from './components/articles/components/article3/article3.component';
import {Article4Component} from './components/articles/components/article4/article4.component';
import {Article5Component} from './components/articles/components/article5/article5.component';
import {EventsComponent} from './components/events/events.component';
import {SpecialEventsComponent} from './components/special-events/special-events.component';
import {AuthService} from '../services/auth.service';
import {EventService} from '../services/event.service';
import {AuthGuard} from '../services/auth.guard';
import {TokenInterceptorService} from '../services/token-interceptor.service';
import {ArchiveComponent} from './components/archive/archive.component';
import {ManagementComponent} from './components/management/management.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ArticlesComponent,
    PageNotFoundComponent,
    Article1Component,
    Article2Component,
    Article3Component,
    Article4Component,
    Article5Component,
    EventsComponent,
    SpecialEventsComponent,
    ArchiveComponent,
    ManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AuthService, EventService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
