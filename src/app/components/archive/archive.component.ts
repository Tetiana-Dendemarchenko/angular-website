import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent {

  readonly URL = 'https://jsonplaceholder.typicode.com';
  posts: any;
  archiveVisible = false;
  page = 4;

  constructor(private http: HttpClient) {
  }

  getPosts(): void {
    this.posts = this.http.get(this.URL + '/posts');
  }

  toggleDisplay(): void {
    this.archiveVisible = !this.archiveVisible;
  }
}
