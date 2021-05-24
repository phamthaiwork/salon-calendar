import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent} from './component/booking/booking.component';
import { CustomerComponent } from './component/customer/customer.component';
import { StaffComponent } from './component/staff/staff.component';
import { ServiceComponent } from './component/service/service.component';
import { ProductComponent } from './component/product/product.component';
import { VoucherComponent } from './component/voucher/voucher.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CustomerComponent,
    StaffComponent,
    ServiceComponent,
    ProductComponent,
    VoucherComponent,
    TransferComponent,
    HeaderComponent,
    SidebarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
