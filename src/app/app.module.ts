import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TechStackComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent, data: {animation: 'Home'}},
      {path: "about", component: AboutComponent, data: {animation: 'About'}},
      {path: "contact", component: ContactComponent, data: {animation: 'Contact'}},
      {path: "tech-stack", component: TechStackComponent, data: {animation: 'Tech-Stack'}},
      {path: "portfolio", component: PortfolioComponent, data: {animation: 'Portfolio'}},
      {path: "**", component: NotFoundComponent, data: {animation: 'Not-Found'}},
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
