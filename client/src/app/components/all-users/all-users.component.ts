import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RestApiService} from '../../services/rest-api/rest-api.service';
import 'rxjs/add/observable/forkJoin';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  allUsers:Observable<User[]>;
  user:Observable<User>;

  constructor(private restApiService:RestApiService) {
  }

  getAllUsers() {
    this.allUsers = this.restApiService.getAllUsers();
  }

  getUser(userId:string) {
    this.user = this.restApiService.getUser(userId);
  }

  getFriends(friendsIds:string[]) {
    let requests = [];
    for (let id of friendsIds) {
      requests.push(this.restApiService.getUser(id));
    }

    Observable.forkJoin(requests).subscribe(results => {
      console.log('got all friends', results);
    });
  }

  getJob(jobId:string) {
    this.restApiService.getJob(jobId).subscribe(job => {
      console.log('got job', job);
    });
  }
}
