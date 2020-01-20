import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  template: `
    <div class="flex border-b px-6 bg-white">
        <a *ngFor="let link of links; let i = index" href="#"
           [class.border-blue-700]="i === activeLink"
           [class.border-transparent]="i !== activeLink"
           (click)="activeLink = i"
           class="text-sm pt-2 pb-1 border-b-2 mr-4">
            {{ link.label }}
        </a>
    </div>
  `,
  styles: []
})
export class SubNavComponent implements OnInit {

  activeLink = 0;
  links = [
    {
      label: 'Subnav Link 1'
    },
    {
      label: 'Subnav Link 2'
    },
    {
      label: 'Subnav Link 3'
    },
    {
      label: 'Subnav Link 4'
    },
    {
      label: 'Subnav Link 5'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
