import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-links-status',
  templateUrl: './links-status.component.html'
})
export class LinksStatusComponent {
  result:Observable<any>;
  constructor(private httpClient:HttpClient) {
  }

  getLinksStatus() {
    this.result = this.httpClient.get('http://localhost:9000/count');
  }
}
