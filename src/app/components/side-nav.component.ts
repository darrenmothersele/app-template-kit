import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <div class="pl-6 flex flex-col justify-end">
        <a href="#" class="mb-4 inline-block rounded-l bg-gray-200 pr-6 py-2 pl-3 font-medium">Default Element</a>
        <a href="#" class="inline-block rounded-l hover:bg-gray-100 pr-6 py-2 pl-3 font-medium">Second nav</a>
    </div>
  `,
  styles: [`
  :host {
      overflow: hidden;
  }
  `]
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
