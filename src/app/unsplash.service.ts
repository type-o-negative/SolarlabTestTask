import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private baseUrl: string = 'https://api.unsplash.com';
  private accessKey: string = 'uus8yKcqaBOr43s9pptbe43Y5reoL_odmXHXEbhDEN0'; 
  
  constructor() { }

  async searchPhotos(query: string, page: number = 1, perPage: number = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}/search/photos`, {
        params: {
          query,
          page,
          per_page: perPage,
          client_id: this.accessKey
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching photos:', error);
      throw error;
    }
  }
}
