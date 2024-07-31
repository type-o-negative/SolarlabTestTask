import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryModule } from "./gallery/gallery.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unsplash-gallery-app';
}
