import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos: any[] = [];
  query: string = '';
  page: number = 1;
  perPage: number = 10;
  totalPages: number = 0;

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit(): void {
    this.searchPhotos();
  }

  async searchPhotos() {
    try {
      const data = await this.unsplashService.searchPhotos(this.query, this.page, this.perPage);
      this.photos = data.results;
      this.totalPages = Math.ceil(data.total / this.perPage);
    } catch (error) {
      console.error('Error searching photos:', error);
    }
  }

  onSearch(query: string) {
    this.query = query;
    this.page = 1;
    this.searchPhotos();
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.searchPhotos();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.searchPhotos();
    }
  }
}
