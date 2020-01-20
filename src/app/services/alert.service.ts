import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  // TODO: if get an alert while one is shown, add it to the stack?
  stack = [];

  _alert = new BehaviorSubject(null);
  showAlert = this._alert.asObservable();

  constructor() {
  }

  sendAlert(alertConfig) {
    this.stack.push(alertConfig);
    if (this.stack.length === 1) {
      this._alert.next(alertConfig);
    }
  }

  info(message, actions) {
    return new Promise((resolve) => {
      const callback = result => {
        this.stack.shift();
        if (this.stack.length > 0) {
          this._alert.next(this.stack[0]);
        } else {
          this._alert.next(null);
        }
        resolve(result);
      };
      this.sendAlert({ type: 'info', message, actions, callback });
    });
  }
}
