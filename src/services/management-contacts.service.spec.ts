import { TestBed } from '@angular/core/testing';

import { ManagementContactsService } from './management-contacts.service';

describe('ManagementContactsService', () => {
  let service: ManagementContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
