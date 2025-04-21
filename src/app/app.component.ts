import {Component} from '@angular/core';
 import { HomeComponent } from './home/home.component';
 import { RouterOutlet, RouterLink } from '@angular/router';
 import { HousingLocationComponent } from './housing-location/housing-location.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
<main>
       <a [routerLink]="['/']">
         <header class="brand-name">
           <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
         </header>
       </a>
       <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}