import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm = new FormGroup({});
  isError = false;
  errorMessage = '';

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    const response = this.authService.login(this.loginForm.getRawValue());
    if (response.isError) {
      this.isError = true;
      this.errorMessage = response.errorMessage;
      this.loading = false;
      return;
    } else {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(response.payload));
        this.loading = false;
        this.dialogRef.close({ isSuccess: true });
      }, 500);
    }
  }

}
