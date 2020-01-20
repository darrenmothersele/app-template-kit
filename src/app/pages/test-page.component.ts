import { Component } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-test-page',
  template: `
    <button class="border-blue-400 text-blue-400 px-2 py-1 border rounded hover:bg-blue-400 hover:text-white" type="button" (click)="testAlert()">Test alert</button>
  `,
  styles: []
})
export class TestPageComponent {

  constructor(
    private readonly alertService: AlertService
  ) { }

  async testAlert() {
    await this.alertService.info('App Level Alert #' + Math.floor(Math.random() * 1000), ['Action']);
  }

}
