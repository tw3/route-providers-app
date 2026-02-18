import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SimplePostAuthService } from '../../services/simple-post-auth.service';

@Component({
  selector: 'app-acme-pages',
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  template: `
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/contact-us">Contact Us</a> |
      <button (click)="logout()">Log Out</button>
      <br />
      <small>Auth Service: {{ authService.status$ | async }}</small>
    </nav>
    <hr />
    <router-outlet />
  `,
})
export class AcmePagesComponent {
  protected readonly authService = inject(SimplePostAuthService);
  private readonly router = inject(Router);

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/logged-out');
  }
}
