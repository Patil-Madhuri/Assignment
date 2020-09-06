import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { LoginComponent } from './components/login/login.component';
import { AppMaterial } from './appmaterial.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    ContactListComponent,
    LoginComponent,
    NavbarComponent,
    SearchPipe ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterial,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    InfiniteScrollModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
