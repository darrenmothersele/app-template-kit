import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-alert-region',
  template: `
      <div @flyInOut 
           *ngIf="alert$ | async as alert" 
           class="flex items-center px-4 justify-between bg-blue-500 px-4 py-2">
          <div class="w-4 h-4"></div>
          <div class="flex items-center">
              <svg class="mr-2 w-4 h-4 fill-current text-blue-100" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20">
                  <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm12.73-1.41A8 8 0 104.34 4.34a8 8 0 0011.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
              </svg>
              <span class="mr-2 text-sm text-blue-100">{{ alert.message }}</span>
              <button class="uppercase tracking-wider text-xs text-blue-100 border rounded border-blue-100 hover:bg-blue-400 px-2 py-1"
                      (click)="alert.callback(action)" *ngFor="let action of alert.actions">{{ action }}</button>
          </div>
          <button (click)="alert.callback()">
              <svg class="w-4 h-4 fill-current text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
              </svg>
          </button>
      </div>
  `,
  styles: [
    `:host { 
          position: absolute;
          top: 0; 
          left: 0;
          right: 0;
      }`
  ],
  animations: [
    trigger('flyInOut', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class AlertRegionComponent implements OnInit {

  alert$;

  constructor(
    private readonly alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.alert$ = this.alertService.showAlert;
  }

}
