import { PhotosComponent } from "./../photos/photos.component";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PhotoData } from "../Interfaces/Photo";

@Component({
  selector: "app-image-dialog",
  templateUrl: "./image-dialog.component.html",
  styleUrls: ["./image-dialog.component.css"]
})
export class ImageDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PhotosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PhotoData
  ) {}

  photo: PhotoData;
  ngOnInit() {
    this.getPhoto();
  }

  getPhoto() {
    return (this.photo = this.data);
  }
  close(): void {
    this.dialogRef.close();
  }
  save(Photo: PhotoData) {
    console.log(Photo);
  }
}
