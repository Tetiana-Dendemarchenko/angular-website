import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
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
import {AuthGuard} from '../services/auth.guard';
import {ManagementComponent} from './components/management/management.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/main-page'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'article1', component: Article1Component},
  {path: 'article2', component: Article2Component},
  {path: 'article3', component: Article3Component},
  {path: 'article4', component: Article4Component},
  {path: 'article5', component: Article5Component},
  {path: 'events', component: EventsComponent},
  {path: 'management', component: ManagementComponent},
  {path: 'special', component: SpecialEventsComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
