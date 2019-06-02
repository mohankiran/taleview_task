import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {UserService} from "../service/user.service";
const $: any = '';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  isAuthenticate: boolean = false;
  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private authService: UserService) { }

  onSubmit() {
    this.submitted = true;
    
    if (this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.email.value) {
      this.authService.authenticateUser(this.loginForm.controls.email.value).subscribe(res=>{
        this.authService.userName = this.loginForm.controls.email.value;
        
        for (let value of Object.values(res)) {
          
         if(value == "mohankiran") {
          this.isAuthenticate = true;
          break;
         } 
        }
        if(this.isAuthenticate){
          this.router.navigate(['list-user']);
        } else {
          this.isAuthenticate = false;
          this.invalidLogin = true;
        }
        
      },err=>{
        console.log(err);

      })
    }else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }



}
