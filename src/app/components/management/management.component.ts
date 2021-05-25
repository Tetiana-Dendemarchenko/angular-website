import {Component} from '@angular/core';
import {ManagementContactsService} from '../../../services/management-contacts.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  managers: any[] = [];
  totalRecords: string;
  searchTerm: string;
  page = 1;
  isShown = false;

  constructor(private managementContacts: ManagementContactsService) {
    this.managers = new Array<any>();
  }

  getManager(): void {
    this.managementContacts.getData().subscribe((managers) => {
      this.managers = managers;
      this.totalRecords = managers.length;
      this.isShown = !this.isShown;
    });
  }

}
