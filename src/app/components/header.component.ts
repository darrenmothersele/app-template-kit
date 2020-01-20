import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="bg-blue-900 flex">
        <a href="#" class="flex items-center px-6 py-4 border-r border-blue-800" (click)="activeLink = -1">
            <div class="mr-2 bg-blue-800 rounded p-2">
                <svg class="w-6 h-6 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0116 17H5a5 5 0 01-1-9.9V7a3 3 0 014.52-2.59A4.98 4.98 0 0117 8c0 .38-.04.74-.12 1.1z"/></svg>
            </div>
            <span class="text-white font-medium">App Template</span>
        </a>
        <ul class="flex">
            <li class="flex items-center justify-center"
                [class.bg-transparent]="activeLink !== 0"
                [class.bg-blue-800]="activeLink === 0">
                <a href="#" class="p-6" (click)="activeLink = 0">
                    <svg class="w-5 h-5 fill-current"
                         [class.text-blue-200]="activeLink === 0"
                         [class.text-blue-100]="activeLink !== 0"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 110-20 10 10 0 010 20zm-5.6-4.29a9.95 9.95 0 0111.2 0 8 8 0 10-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 11-1.41-1.41z"/></svg>
                </a>
            </li>
            <li class="flex items-center justify-center"
                [class.bg-transparent]="activeLink !== 1"
                [class.bg-blue-800]="activeLink === 1">
                <a href="#" class="p-6" (click)="activeLink = 1">
                    <svg class="w-5 h-5 fill-current"
                         [class.text-blue-200]="activeLink === 1"
                         [class.text-blue-100]="activeLink !== 1"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 2v10h16V6H2z"/></svg>
                </a>
            </li>
            <li class="flex items-center justify-center"
                [class.bg-transparent]="activeLink !== 2"
                [class.bg-blue-800]="activeLink === 2">
                <a href="#" class="p-6" (click)="activeLink = 2">
                    <svg class="w-5 h-5 fill-current"
                         [class.text-blue-200]="activeLink === 2"
                         [class.text-blue-100]="activeLink !== 2"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68A19.9 19.9 0 0110 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/></svg>
                </a>
            </li>
        </ul>
    </div>
    
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  activeLink = 1;

  constructor() { }

  ngOnInit() {
  }

}
