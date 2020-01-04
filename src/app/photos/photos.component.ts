import { ImageDialogComponent } from "./../image-dialog/image-dialog.component";
import { NgxSpinnerService } from "ngx-spinner";
import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig
} from "@angular/material/dialog";
import { PhotoData } from "../Interfaces/Photo";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  photos: any;
  albumId: any;
  photo: PhotoData;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadPhotos();
    this.spinner.hide();
  }

  loadPhotos() {
    this.spinner.show();
    this.albumId = this.route.snapshot.params.albumId;
    this.photos = this.api.getImages(this.albumId).subscribe(res => {
      this.photos = res;
      console.log(this.photos);
    });

    return this.photos;
  }

  openDialog(photo: PhotoData) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: photo.photoId,
      url: photo.url
    };

    this.dialog.open(ImageDialogComponent, dialogConfig);
  }
}
