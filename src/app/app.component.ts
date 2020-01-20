import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-alert-region></app-alert-region>
    <app-header></app-header>
    <app-sub-nav></app-sub-nav>
    <div class="flex-1 flex">
        <div class="border-r bg-white">
            <app-side-nav class="mt-6"></app-side-nav>
        </div>
        <div class="ml-6 mt-6">
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styles: [`
    :host {
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
  app-side-nav {
      display: block;
      min-width: 9rem;
      max-width: 13rem;
  }
  `]
})
export class AppComponent {}
