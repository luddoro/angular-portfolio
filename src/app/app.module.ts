import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { SidebarComponent } from './sidebar/sidebar.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DevopsComponent } from './devops/devops.component';
import { ContactComponent } from './contact/contact.component';
import { InfoblockComponent } from './infoblock/infoblock.component';
import { CenterwrapperComponent } from './centerwrapper/centerwrapper.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    WebdevComponent,
    DevopsComponent,
    ContactComponent,
    InfoblockComponent,
    CenterwrapperComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
