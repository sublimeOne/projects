import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

export interface admin{
  id: number;
  name: string;
  title: string;
  }
 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  constructor(private http: HttpClient) { }

  ngOnInit() {
   
  }

}
