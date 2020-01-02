import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  albums: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.albums = this.api.getAlbums().subscribe(res => {
      console.log(res);
      this.albums = res;
   })
    console.log(this.albums)
  }



}
