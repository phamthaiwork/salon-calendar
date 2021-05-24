import {Component} from '@angular/core';

@Component ({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    menuItem: {
        iconBook: 'assets/img/iconBook24.svg',
        iconBookActive: 'assets/img/iconBookActive24.svg',
        iconCustomer: 'assets/img/iconCustomer24.svg',
        iconCustomerActive: 'assets/img/iconCustomerActive24.svg',
        iconStaff: 'assets/img/iconStaff24.svg',
        iconStaffActive: 'assets/img/iconStaffActive24.svg',
        iconService: 'assets/img/iconService24.svg',
        iconServiceActive: 'assets/img/iconServiceActive24.svg',
        iconProduct: 'assets/img/iconProduct24.svg',
        iconProductActive: 'assets/img/iconProductActive24.svg',
        iconVoucher: 'assets/img/iconVoucher24.svg',
        iconVoucherActive: 'assets/img/iconVoucherActive24.svg',
        iconTransfer: 'assets/img/iconTransfer24.svg',
        iconTransferActive: 'assets/img/iconTransferActive24.svg',
    }
}