import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, MessageService} from 'primeng/api';      
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {TableModule} from 'primeng/table';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes,RouterModule } from '@angular/router'
import { myModal, SearchBarComponent } from './search-bar/search-bar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomePageComponent } from './home-page/home-page.component';
import {CheckboxModule} from 'primeng/checkbox';
import { SidebarComponent } from './sidebar/sidebar.component';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SearchYourReservationsComponent } from './search-your-reservations/search-your-reservations.component';
import { DatePipe } from '@angular/common'
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import {ToastModule} from 'primeng/toast';
import { ToastrModule,ToastNoAnimationModule } from 'ngx-toastr';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
const routes: Routes=[
                      {path:'search-cars',component:SearchBarComponent},
                      {path:'homes',component:HomePageComponent},
                      {path:'create-user', component:UserRegistrationComponent},
                      {path:'my-reservations',component:SearchYourReservationsComponent},
                      {path:'',component:HomePageComponent},
                      {path:'update-reservation',component:UpdateReservationComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    HomePageComponent,
    SidebarComponent,
    UserRegistrationComponent,
    SearchYourReservationsComponent,
    myModal,
    UpdateReservationComponent

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
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    AccordionModule,
    CardModule,
    RouterModule.forRoot(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,
    ImageModule,
    InputTextModule,
    CalendarModule
    ,HttpClientModule,
    MessageModule,
    MessagesModule,
    MatDialogModule,
    ToastModule,ToastNoAnimationModule.forRoot(),MatDividerModule,MatListModule

    
  ],
  providers: [DatePipe,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
