import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {
  private subject = new Subject<any>();


  constructor() { }
  setClickService(buttonId) {
    this.subject.next({ id: buttonId });
  }
  getClickService(): Observable<any> {
    return this.subject.asObservable();
  }
}
