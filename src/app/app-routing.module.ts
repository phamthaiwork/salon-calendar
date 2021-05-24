import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './component/booking/booking.component';
import { CustomerComponent } from './component/customer/customer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductComponent } from './component/product/product.component';
import { ServiceComponent } from './component/service/service.component';
import { StaffComponent } from './component/staff/staff.component';
import { TransferComponent } from './component/transfer/transfer.component';
import { VoucherComponent } from './component/voucher/voucher.component';

const routes: Routes = [
  {path: 'booking', component: BookingComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'product', component: ProductComponent},
  {path: 'voucher', component: VoucherComponent},
  {path: 'transfer', component: TransferComponent},
  {path: '', redirectTo:'/booking', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
