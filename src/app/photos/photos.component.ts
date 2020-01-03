import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

photos: any;
albumId: number;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }
  
  ngOnInit() {
   this.loadPhotos();
   this.spinner.hide();
  }

loadPhotos(){
  this.spinner.show();
  this.albumId = this.route.snapshot.params.albumId;
  this.photos = this.api.getImages(this.albumId).subscribe(res => {
        this.photos = res;
        console.log(this.photos);
 });
 
 return this.photos;
 
}


}
