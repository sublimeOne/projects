import { ApiService } from "./../services/api.service";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
}

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  albums: any = [];

  constructor(
    private api: ApiService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.loadAlbumTitles();
    this.spinnerService.hide();
  }

  loadAlbumTitles() {
    debugger;
    this.spinnerService.show();
    this.albums = this.api.getAlbums().subscribe(res => {
      this.albums = res;
      console.log(this.albums);
    });

    console.log(this.albums);

    return this.albums;
  }
}
