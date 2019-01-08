import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
 
  fromUrl: string;
  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this.activatedRoute.queryParams
        .subscribe(params => this.fromUrl = params['fromUrl']);
    this.loginForm = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  login(){

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password, false).subscribe(
        () => this.router.navigate(['/dashboard']),
        err => {
            console.log(err);
            this.loginForm.reset();
            alert('Invalid user name or password');
        }
    );
  }
}
