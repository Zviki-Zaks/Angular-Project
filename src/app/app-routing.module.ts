import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolver } from './services/contact-resolver.service';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'contact', component: ContactPageComponent, children: [
      { path: 'edit', component: ContactEditComponent, resolve: { contact: ContactResolver } },
      { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
    ]
  },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'statistic', component: StatisticPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
