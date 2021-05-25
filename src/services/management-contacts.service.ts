import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementContactsService {

  constructor(private httpManagement: HttpClient) {
  }

  getData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpManagement.get<any>(url);
  }
}
