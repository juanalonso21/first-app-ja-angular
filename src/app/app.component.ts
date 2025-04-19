import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  template: `    
  <main>
  <header class="brand-name">
    HOMES
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>
`,
styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
