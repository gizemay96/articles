import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-no-auth',
  templateUrl: './no-auth.component.html',
  styleUrls: ['./no-auth.component.scss']
})
export class NoAuthComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }

}
