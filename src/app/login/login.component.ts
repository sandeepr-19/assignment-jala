import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginInfo: FormBuilder | any;

  constructor(private formBuilder: FormBuilder) {
    /** defining the valiadation and initilizatoin of form builder */
    this.loginInfo = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")],]
    })
  }

  ngOnInit() { }

  public required(input: String): boolean {
    return this.loginInfo.get(input).errors?.required &&
      this.loginInfo.get(input).touched
  }

  public pattern(input: String): boolean {
    return this.loginInfo.get(input).errors?.pattern
  }


}
