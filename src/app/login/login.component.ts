import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      password: ''
    })
  }
  output: any;

  validate(email: HTMLInputElement, password: HTMLInputElement) {
    
    if(email.value === "usamagujjar@gmail.com" && password.value === "pakistanzindabad") {
      this.http.get("http://www.mocky.io/v2/5c76d4923200003521f463fc", {responseType: 'text'}).subscribe( e => this.output = (e));
      window.location.replace('http://localhost:4200/dashboard');
      return false;
    } else {
      alert("Failed To Login!");
    }
  }
  


}
