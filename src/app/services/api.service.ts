import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  albums;
  private albumsndpoint = 'https://jsonplaceholder.typicode.com/albums';
  

  constructor( 
    private http: HttpClient) { 

    }

  getAlbums() {
    return this.http.get(this.albumsndpoint);
  } 

  getImages(albumId: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

}
