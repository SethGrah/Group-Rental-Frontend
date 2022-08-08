import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FindAvailableCarsComponent } from './find-available-cars/find-available-cars.component';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';      
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {TableModule} from 'primeng/table';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes,RouterModule } from '@angular/router'
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { HomePageComponent } from './home-page/home-page.component';
import {CheckboxModule} from 'primeng/checkbox';
import { SidebarComponent } from './sidebar/sidebar.component';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { DatePipe } from '@angular/common';
const routes: Routes=[{path:'available-cars',component:FindAvailableCarsComponent},
                      {path:'search-cars',component:SearchBarComponent},
                      {path:'homes',component:HomePageComponent},
                      {path:'create-user', component:UserRegistrationComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindAvailableCarsComponent,
    SearchBarComponent,
    HomePageComponent,
    SidebarComponent,
    UserRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,ReactiveFormsModule,
    CheckboxModule,
    AccordionModule,CardModule,
    RouterModule.forRoot(routes),MatDatepickerModule,MatNativeDateModule,
    CarouselModule,
    ImageModule,
    InputTextModule,CalendarModule,HttpClientModule

    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
