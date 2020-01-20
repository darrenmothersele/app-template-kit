import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertRegionComponent } from './components/alert-region.component';
import { TestPageComponent } from './pages/test-page.component';
import { HeaderComponent } from './components/header.component';
import { SubNavComponent } from './components/sub-nav.component';
import { SideNavComponent } from './components/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlertRegionComponent,
    TestPageComponent,
    HeaderComponent,
    SubNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
