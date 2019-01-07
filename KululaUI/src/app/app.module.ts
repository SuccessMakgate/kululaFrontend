
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BsDatepickerModule, ModalModule} from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightScheduleComponent } from './flight-schedule/flight-schedule.component';
import { CarhireComponent } from './carhire/carhire.component';
import { SeatBookComponent } from './seat-book/seat-book.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { appRoutes } from './Routes';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { AddDetailsComponent } from './client/add-details/add-details.component';
import { CarhireReceiptComponent } from './payment/carhire-receipt/carhire-receipt.component';
import { FlightbookReceiptComponent } from './payment/flightbook-receipt/flightbook-receipt.component';
import { KululaService } from './kululaServices/kulula.service';
import { AddCarmodelComponent } from './admin/add-carmodel/add-carmodel.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { AddFlightscheduleComponent } from './admin/add-flightschedule/add-flightschedule.component';
import { MemberPaymentComponent } from './payment/member-payment/member-payment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarhireHistoryComponent } from './dashboard/carhire-history/carhire-history.component';
import { FlightbookHistoryComponent } from './dashboard/flightbook-history/flightbook-history.component';
import { DiscountHistoryComponent } from './dashboard/discount-history/discount-history.component';
import { TravellersComponent } from './travellers/travellers.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { PopupComponent } from './popup/popup.component';
import { MainTravellerComponent } from './travellers/main-traveller/main-traveller.component';
import { OtherTravellerComponent } from './travellers/other-traveller/other-traveller.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FlightSearchComponent,
    FlightScheduleComponent,
    CarhireComponent,
    SeatBookComponent,
    PaymentComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    AddDetailsComponent,
    CarhireReceiptComponent,
    FlightbookReceiptComponent,
    AddCarmodelComponent,
    AddFlightComponent,
    AddFlightscheduleComponent,
    MemberPaymentComponent,
    NavbarComponent,
    DashboardComponent,
    CarhireHistoryComponent,
    FlightbookHistoryComponent,
    DiscountHistoryComponent,
    TravellersComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    PopupComponent,
    MainTravellerComponent,
    OtherTravellerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [KululaService],
  bootstrap: [AppComponent,NavbarComponent],
  entryComponents:[PopupComponent]
})
export class AppModule { }
