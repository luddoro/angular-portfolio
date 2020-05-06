import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DevopsComponent } from './devops/devops.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'webdev', component: WebdevComponent },
  { path: 'devops', component: DevopsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
