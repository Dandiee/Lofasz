import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LofaszokHorizontalComponent } from './lofaszok-horizontal/lofaszok-horizontal.component';
import { StoreModule } from '@ngrx/store';
import { LofaszokVerticalComponent } from './lofaszok-vertical/lofaszok-vertical.component';
import { LofaszEditorComponent } from './lofasz-editor/lofasz-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LofaszokHorizontalComponent,
    LofaszokVerticalComponent,
    LofaszEditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LofaszFrontend';
}
