import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";


export interface User{
  id: number;
  name: string;
  email: string;
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  userEndpoint = '';
  loginForm: FormGroup;
  constructor(private http: HttpClient,

    ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    
  
  }

  onSubmit(){
    
  }


 
  }

