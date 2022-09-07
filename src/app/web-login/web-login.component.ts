import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-web-login',
  templateUrl: './web-login.component.html',
  styleUrls: ['./web-login.component.css']
})
export class WebLoginComponent implements OnInit {
  loginForm: FormGroup | any;
  constructor(private router: Router, private formbuilder: FormBuilder, private http: HttpClient,) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
   
    this.http.post<any>("https://admin.eniola.app/api/v1/login", this.loginForm.value)
      .subscribe(res => {
        alert("login successfull");
        this.loginForm.reset();
        this.router.navigate(['user'])
      }, err => {
        alert("something is wrong")
      })
  }
}
