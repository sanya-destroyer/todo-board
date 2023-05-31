import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ChangeFieldType} from "../../shared/utils/changeFieldType";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', ' ../../../../shared/styles/form.scss']
})
export class RegisterComponent extends ChangeFieldType implements OnInit {

  registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rePassword: new FormControl('', [Validators.required])
    },
    {
      validators: this.checkMatchValidator('password', 'rePassword')
    }
  )

  constructor(
    private authService: AuthService
  ) {
    super()
  }

  get passwordValue() {
    return this.registerForm.controls.password;
  }

  get rePasswordValue() {
    return this.registerForm.controls.rePassword;
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.authService.registerUser({
      username: this.registerForm.controls.username.value as string,
      password: this.registerForm.controls.password.value as string
    });
  }

  private checkMatchValidator(firstField: string, secondField: string) {
    return (form: AbstractControl) => {
      const firstFieldValue = form.get(firstField)!.value;
      const secondFieldValue = form.get(secondField)!.value;

      if (firstFieldValue !== '' && firstFieldValue !== secondFieldValue) {
        return {'notMatch': `Value ${firstFieldValue} is not equal to ${secondFieldValue}`}
      }
      return null;
    }
  }

}
