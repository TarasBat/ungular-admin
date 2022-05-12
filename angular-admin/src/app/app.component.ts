import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-admin';

  breadcrumbs: string[] = []

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.breadcrumbs = [
      'board',
      'users',
      'user'
    ]
  }

  redirectTo(bredcrumb: string): void {
    this.router.navigateByUrl(bredcrumb);
  }
}
