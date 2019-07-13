import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angularForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  doLogin(value) {
    this.authService.doLogin(value).then(res => {
      this.router.navigate(['contatos']);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {

  }

}
