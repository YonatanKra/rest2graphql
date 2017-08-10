import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {User} from '../../interfaces/user';
import {Job} from '../../interfaces/job';

@Injectable()
export class RestApiService {
  private baseUrl:string = 'http://localhost:9000/api';

  constructor(private http:HttpClient) {
  }

  getAllUsers():Observable<User[]> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUser(userId:string):Observable<User> {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }

  getAllJobs():Observable<Job[]> {
    return this.http.get(`${this.baseUrl}/jobs`);
  }

  getJob(jobId:string):Observable<Job> {
    return this.http.get(`${this.baseUrl}/jobs/${jobId}`);
  }
}
