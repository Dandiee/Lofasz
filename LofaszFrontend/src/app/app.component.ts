import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LofaszokHorizontalComponent } from './lofaszok-horizontal/lofaszok-horizontal.component';
import { StoreModule } from '@ngrx/store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LofaszokHorizontalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LofaszFrontend';
}
