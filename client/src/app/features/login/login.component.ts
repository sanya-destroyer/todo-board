import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangeFieldType} from "../../shared/utils/changeFieldType";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', ' ../../../../shared/styles/form.scss']
})
export class LoginComponent extends ChangeFieldType implements OnInit {


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private authService: AuthService
  ) {
    super()
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.loginForm.valid) {
      this.authService.loginUser({
        username: this.loginForm.controls.username.value as string,
        password: this.loginForm.controls.password.value as string
      });
    }
  }

}
