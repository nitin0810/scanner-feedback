import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  registerForm: FormGroup;
  submitAttempt = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private viewCtrl: ViewController) {

    this.makeForm();
  }


  makeForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
      contact: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      address: [''],
    });
  }

  // getter properties for easy access of controls in html
  get name() { return this.registerForm.get('name'); }
  get username() { return this.registerForm.get('username'); }
  get contact() { return this.registerForm.get('contact'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get address() { return this.registerForm.get('address'); }


  isSameAsPassword() {
    if (this.password.value.trim() && this.confirmPassword.value.trim()) {
      return this.password.value === this.confirmPassword.value;
    }

    return true;
  }

  onSubmit() {
    this.submitAttempt = true;
    if (this.registerForm.invalid) { return; }
  }
    
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
