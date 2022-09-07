import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-web-sign-up',
  templateUrl: './web-sign-up.component.html',
  styleUrls: ['./web-sign-up.component.css']
})
export class WebSignUpComponent implements OnInit {
  loginForm: FormGroup | any;
  constructor(private router: Router, private formbuilder: FormBuilder, private http: HttpClient,) {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      cpassword: new FormControl('', [Validators.required]),
      interests: new FormControl('', [Validators.required]),
      preferrdSize: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
   
    this.http.post<any>("https://admin.eniola.app/api/v1/login", this.loginForm.value)
      .subscribe(res => {
        alert("login successfull");
        this.router.navigate(['/user'])
        this.loginForm.reset();
      }, err => {
        alert("something is wrong")
      })
  }
}
